import InfoIcon from '@material-ui/icons/Info';
import Speaker from 'components/UI/Speaker';
import TooltipCustom from 'components/UI/TooltipCustom';
import React, { useEffect, useRef, useState } from 'react';
import useStyle from './style';
import winAudioSrc from 'assets/audios/win.mp3';
import { onPlayAudio } from 'helper/speaker.helper';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import highscoreApi from 'apis/highscoreApi';
import accountApi from 'apis/accountApi';
import { setUserCoin } from 'redux/slices/userInfo.slice';
import { HIGHSCORE_NAME } from 'constant/game';
import { useDispatch, useSelector } from 'react-redux';

const TOTAL_TIME = 60_000;
const RESET_TIME = 250;
const MINUS_TIME = 2000;
const ADD_TIME = MINUS_TIME * 1.5;
const CORRECT_SCORE = 10;
const WRONG_SCORE = 5;
const SCORE_PER_SEC = 5;

function generateAnswerList(list = [], word = '') {
  const index = list.findIndex(
    (i) => i?.word.toLowerCase() === word.toLowerCase(),
  );
  let seedList = [...list.slice(0, index), ...list.slice(index + 1)];
  seedList = seedList.sort(() => Math.random() - 0.5).slice(0, 8);
  seedList.push(list[index]);

  return seedList.sort(() => Math.random() - 0.5);
}

function TimeBar({ correctFlag, wrongFlag, onSaveTime, onTimeout }) {
  const classes = useStyle();
  const [restTime, setRestTime] = useState(TOTAL_TIME);
  const percent = Math.round((restTime / TOTAL_TIME) * 100);
  const minute = ~~(restTime / 60_000);
  const second = `0${~~(restTime / 1_000) % 60}`.slice(-2);

  useEffect(() => {
    onSaveTime(restTime);

    const intervalId = setInterval(() => {
      const newRestTime = restTime - RESET_TIME;
      if (newRestTime <= 0) {
        onTimeout();
        clearInterval(intervalId);
        onSaveTime(0);
        return;
      }
      setRestTime(newRestTime);
    }, RESET_TIME);

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [restTime]);

  // When correct
  useEffect(() => {
    // pass the first render
    if (!correctFlag) {
      return;
    }

    const newRestTime = restTime + ADD_TIME;
    if (newRestTime < TOTAL_TIME) {
      setRestTime(newRestTime);
    } else {
      setRestTime(TOTAL_TIME);
    }
  }, [correctFlag]);

  // When wrong
  useEffect(() => {
    // pass the first render
    if (!wrongFlag) {
      return;
    }

    const newRestTime = restTime - MINUS_TIME;
    if (newRestTime) {
      setRestTime(newRestTime);
    } else {
      onTimeout();
    }
  }, [wrongFlag]);

  return (
    <div className={classes.timerWrap}>
      <span className={classes.timeStr}>{`${minute}:${second}`}</span>
      <div className={classes.timer} style={{ width: `${percent}%` }}></div>
    </div>
  );
}

function Result({ score }) {
  const classes = useStyle();
  const history = useHistory();
  const { isAuth, coin } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuth) return;

    (async function () {
      try {
        const newCoin = coin + score;

        highscoreApi.putUpdateHighscore(HIGHSCORE_NAME.FAST_GAME, score);

        const apiRes = await accountApi.putUpdateUserCoin(newCoin);
        if (apiRes.status === 200) {
          dispatch(setUserCoin(newCoin));
        }
      } catch (error) {}
    })();
    return () => {};
  }, []);

  // play win audio
  useEffect(() => {
    onPlayAudio(winAudioSrc);
  }, []);

  const onGoBack = () => {
    history.push('/');
  };

  const onReplay = () => {
    location.reload();
  };

  return (
    <div className="w-100 h-100 flex-center flex-dir-col">
      <h2 className={classes.doneTitle}>Kết thúc</h2>
      <div className={classes.doneResult}>Điểm của bạn là: {score}</div>
      <div className="mt-10">
        <Button
          className="_btn _btn-outlined-stand mr-5"
          variant="outlined"
          onClick={onGoBack}>
          Quay về
        </Button>
        <Button className="_btn _btn-primary" onClick={onReplay}>
          Chơi lại
        </Button>
      </div>
    </div>
  );
}

function FastGame({ list }) {
  const classes = useStyle();
  const currentIndex = useRef(0);
  const [word, setWord] = useState(list[currentIndex.current].word);
  const [answerList, setAnswerList] = useState(generateAnswerList(list, word));
  const [score, setScore] = useState(0);
  const restTime = useRef(TOTAL_TIME);
  const [isDone, setIsDone] = useState(false);

  const onDone = () => {
    setScore(score + ~~(restTime / 1000) * SCORE_PER_SEC);
    setIsDone(true);
  };

  // flag to increase or decrease time
  const [flag, setFlag] = useState({
    correct: 0,
    wrong: 0,
  });

  const handleCorrect = () => {
    if (currentIndex.current >= list.length - 1) {
      onDone();
      return;
    }

    const newWord = list[currentIndex.current + 1].word;
    const newAnswerList = generateAnswerList(list, newWord);

    setWord(newWord);
    setAnswerList([...newAnswerList]);
    currentIndex.current++;

    setFlag({ ...flag, correct: flag.correct + 1 });
    setScore(score + CORRECT_SCORE);
  };

  const handleWrong = (removeIndex) => {
    const newAnswerList = [...answerList];
    delete newAnswerList[removeIndex];

    setAnswerList([...newAnswerList]);
    setFlag({ ...flag, wrong: flag.wrong + 1 });
    setScore(score - WRONG_SCORE);
  };

  const handleAnswer = (answer, index) => {
    const isCorrect = answer.toLowerCase() === word.toLowerCase();
    if (isCorrect) {
      handleCorrect();
    } else {
      handleWrong(index);
    }
  };

  return (
    <div className="d-flex flex-dir-col h-100">
      {!isDone ? (
        <>
          <div className={classes.title}>
            <p className={`${classes.nTotal} flex-center`}>
              Câu&nbsp;<span>{currentIndex.current + 1}</span>&nbsp;/&nbsp;
              <span>{list.length}</span>
              <span>{` - Điểm: ${score}`}</span>
              <TooltipCustom
                className="ml-5 cur-pointer"
                title={`Chọn hình ảnh đúng với nghĩa của từ. Chọn sai -${WRONG_SCORE}đ, đúng +${CORRECT_SCORE}đ. Điểm sẽ được cộng thêm với thời gian còn lại của bạn.`}>
                <InfoIcon />
              </TooltipCustom>
            </p>
            <h1 className="flex-center">
              <span className="mr-8">{word}</span> <Speaker text={word} />
            </h1>
          </div>
          <div className={`flex-grow-1 ${classes.answerList}`}>
            {answerList.map((item, index) => {
              if (item && item.picture) {
                return (
                  <div
                    key={index}
                    className={classes.answerItem}
                    onClick={() => handleAnswer(item.word, index)}>
                    {item.picture && <img src={item.picture} />}
                  </div>
                );
              }
              return <div key={index} className={classes.answerItem}></div>;
            })}
          </div>

          <TimeBar
            correctFlag={flag.correct}
            wrongFlag={flag.wrong}
            onSaveTime={(time) => (restTime.current = time)}
            onTimeout={onDone}
          />
        </>
      ) : (
        <Result score={score} />
      )}
    </div>
  );
}

export default FastGame;

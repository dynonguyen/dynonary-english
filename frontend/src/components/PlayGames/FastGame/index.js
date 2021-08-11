import InfoIcon from '@material-ui/icons/Info';
import TooltipCustom from 'components/UI/TooltipCustom';
import React, { useEffect, useRef, useState } from 'react';
import useStyle from './style';

const TOTAL_TIME = 120_000;
const RESET_TIME = 500;
const MINUS_TIME = 2000;
const ADD_TIME = MINUS_TIME * 1.5;
const CORRECT_SCORE = 10;
const WRONG_SCORE = 5;

function generateAnswerList(list, word) {
  return [...list]
    .filter((i) => i.word?.toLowerCase() !== word.toLowerCase)
    .slice(0, 9)
    .sort(() => Math.random() - 0.5);
}

function TimeBar({ correctFlag, wrongFlag }) {
  const classes = useStyle();
  const [restTime, setRestTime] = useState(TOTAL_TIME);
  const percent = Math.round((restTime / TOTAL_TIME) * 100);
  const minute = ~~(restTime / 60_000);
  const second = `0${~~(restTime / 1_000) % 60}`.slice(-2);

  const onTimeout = () => {
    console.log('Hết giờ');
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newRestTime = restTime - RESET_TIME;
      if (newRestTime <= 0) {
        onTimeout();
        clearInterval(intervalId);
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

function FastGame({ list }) {
  const classes = useStyle();
  const currentIndex = useRef(0);
  const [word, setWord] = useState(list[currentIndex.current].word);
  const [answerList, setAnswerList] = useState(generateAnswerList(list, word));
  const [score, setScore] = useState(0);

  const onDone = () => {
    console.log('Xong');
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
    setWord(newWord);
    setAnswerList(generateAnswerList(list, newWord));
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
        <h1>{word}</h1>
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

      <TimeBar correctFlag={flag.correct} wrongFlag={flag.wrong} />
    </div>
  );
}

export default FastGame;

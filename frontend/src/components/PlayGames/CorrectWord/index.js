import WrongIcon from '@material-ui/icons/Cancel';
import RightIcon from '@material-ui/icons/CheckCircle';
import logoGame from 'assets/icons/games/correct-word.png';
import { UX } from 'constant';
import { playSoundAnswer } from 'helper/speaker.helper';
import useSpeaker from 'hooks/useSpeaker';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import CorrectWordResult from '../Result';
import useStyle from './style';

function shuffleAnswers(word, phonetic, wrongList) {
  let mergeList = [...wrongList, { word, phonetic }];
  return mergeList.sort(() => Math.random() - 0.5);
}

function addClassAnswerItem(status, answerIndex, index, word, answer) {
  if (status !== 0) {
    if (word === answer) return 'right';
    if (answerIndex === index) return 'wrong';
  }
  return '';
}

function CorrectWord({ list }) {
  const classes = useStyle();
  const { voice, speed, volume } = useSpeaker();

  // fix Can't perform a React state update on an unmounted component
  const isSubscribe = useRef(true);

  const [state, setState] = useState({
    current: 0,
    nRight: 0,
    nWrong: 0,
    // status 0 - reading question, 1 - show right result, 2 - show wrong result
    status: 0,
    answerList: shuffleAnswers(
      list[0]?.word,
      list[0]?.phonetic,
      list[0]?.wrongList,
    ),
    answerIndex: -1,
  });
  const [isDone, setIsDone] = useState(false);

  const nQuestion = list.length;
  const { status, current, nRight, nWrong, answerList, answerIndex } = state;
  const { word, mean } = list[state.current];
  const nRightConsecutive = useRef({ top: 0, n: 0 });

  // fix Can't perform a React state update on an unmounted component
  useEffect(() => {
    return () => (isSubscribe.current = false);
  }, []);

  const onAnswer = (answer, answerIndex) => {
    if (answer === word) {
      playSoundAnswer(word, true, voice, volume, speed);
      setState({
        ...state,
        nRight: nRight + 1,
        status: 1,
        answerIndex,
      });
      nRightConsecutive.current.n++;
    } else {
      playSoundAnswer(word, false, voice, volume, speed);
      setState({
        ...state,
        nWrong: nWrong + 1,
        status: 2,
        answerIndex,
      });
      const { top, n } = nRightConsecutive.current;
      if (top < n) nRightConsecutive.current.top = n;
    }

    // wait to speak the word if not last question
    if (current !== list.length - 1) {
      setTimeout(() => {
        const newAnswerList = shuffleAnswers(
          list[current + 1]?.word,
          list[current + 1]?.phonetic,
          list[current + 1]?.wrongList,
        );

        isSubscribe.current &&
          setState((preState) => ({
            ...preState,
            status: 0,
            answerIndex: -1,
            current: current + 1,
            answerList: newAnswerList,
          }));
      }, UX.DELAY_ANSWER);
    } else {
      setTimeout(() => {
        isSubscribe.current && setIsDone(true);
      }, UX.DELAY_ANSWER);
    }
  };

  const handleReplay = () => {
    setIsDone(false);
    setState({
      current: 0,
      nRight: 0,
      nWrong: 0,
      // status 0 - reading question, 1 - show right result, 2 - show wrong result
      status: 0,
      answerList: shuffleAnswers(
        list[0]?.word,
        list[0]?.phonetic,
        list[0]?.wrongList,
      ),
      answerIndex: -1,
    });
    nRightConsecutive.current = { top: 0, n: 0 };
  };

  return (
    <div className="flex-center-col h-100vh container">
      <div className={`${classes.root} container dyno-game-box`}>
        {/* title */}
        <div className="dyno-game-title">
          <img src={logoGame} alt="game photo" />
          <h1>Hãy chọn từ đúng</h1>
        </div>

        {!isDone ? (
          <>
            {/* summary */}
            <div className={`${classes.summary} flex-center-between`}>
              <div className="flex-center--ver">
                Câu&nbsp;<b>{current + 1}</b>
                &nbsp;/&nbsp;
                <b>{nQuestion}</b>
              </div>

              <div className="flex-center--ver">
                <b>{nRight}</b>&nbsp;Đúng
                <RightIcon className={`${classes.summaryIcon} right`} />
                &nbsp;-&nbsp;
                <b>{nWrong}</b>&nbsp;Sai
                <WrongIcon className={`${classes.summaryIcon} wrong`} />
              </div>
            </div>

            {/* body */}
            <div
              className={`${classes.mainContent} ${
                status !== 0 ? 'disabled' : 'ani-fade'
              }`}>
              {/* question */}
              <div className="flex-center-col">
                <p
                  style={{ visibility: status === 0 ? 'hidden' : 'visible' }}
                  className={`${classes.result} ${
                    status === 1 ? 'right' : 'wrong'
                  }`}>
                  {status === 1 ? 'Chính xác' : 'Sai rồi'}
                </p>
                <span className={`${classes.question} t-center`}>{mean}</span>
              </div>

              {/* answers */}
              <div className={classes.answers}>
                {answerList.map((answer, index) => (
                  <div
                    onClick={() => onAnswer(answer.word, index)}
                    className={`${
                      classes.answerItem
                    } flex-center-col p-5 ${addClassAnswerItem(
                      status,
                      answerIndex,
                      index,
                      word,
                      answer.word,
                    )}`}
                    key={index}>
                    <p className="mb-2 t-center">{answer.word}</p>
                    {answer.phonetic && (
                      <span className="phonetic t-center">
                        /{answer.phonetic}/
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <CorrectWordResult
            onReplay={handleReplay}
            nRight={nRight}
            nWrong={nWrong}
            nRightConsecutive={nRightConsecutive.current.top}
          />
        )}
      </div>
    </div>
  );
}

CorrectWord.propTypes = {
  list: PropTypes.array,
};

CorrectWord.defaultProps = {
  list: [],
};

export default CorrectWord;

import WrongIcon from '@material-ui/icons/Cancel';
import RightIcon from '@material-ui/icons/CheckCircle';
import logoGame from 'assets/icons/games/correct-word.png';
import { UX } from 'constant';
import { playSoundAnswer } from 'helper/speaker.helper';
import useSpeaker from 'hooks/useSpeaker';
import React, { useState } from 'react';
import useStyle from './style';

const list = (function () {
  let res = [];
  for (let i = 0; i < 10; ++i) {
    res.push({
      word: `${i}.Happy`,
      mean: 'Vui vẻ',
      phonetic: 'happy',
      wrongList: [
        {
          word: `Wrong-${i}`,
          phonetic: `phonetic-${i}`,
        },
        {
          word: `Wrong-${i + 1}`,
          phonetic: `phonetic-${i + 1}`,
        },
        {
          word: `Wrong-${i + 2}`,
          phonetic: `phonetic-${i + 2}`,
        },
      ],
    });
  }
  return res;
})();

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

function CorrectWord() {
  const { voice, speed, volume } = useSpeaker();

  const classes = useStyle();
  const nQuestion = list.length;
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

  const { status, current, nRight, nWrong, answerList, answerIndex } = state;
  const { word, mean } = list[state.current];

  const onAnswer = (answer, answerIndex) => {
    if (answer === word) {
      playSoundAnswer(word, true, voice, volume, speed);
      setState({
        ...state,
        nRight: nRight + 1,
        status: 1,
        answerIndex,
      });
    } else {
      playSoundAnswer(word, false, voice, volume, speed);

      setState({
        ...state,
        nWrong: nWrong + 1,
        status: 2,
        answerIndex,
      });
    }

    // wait to read word if not last question
    if (current !== list.length - 1) {
      setTimeout(() => {
        const newAnswerList = shuffleAnswers(
          list[current + 1]?.word,
          list[current + 1]?.phonetic,
          list[current + 1]?.wrongList,
        );
        setState((preState) => ({
          ...preState,
          status: 0,
          answerIndex: -1,
          current: current + 1,
          answerList: newAnswerList,
        }));
      }, UX.DELAY_ANSWER);
    }
  };

  return (
    <div className="container">
      <div className={`${classes.root} dyno-game-box`}>
        {/* title */}
        <div className="dyno-game-title">
          <img src={logoGame} alt="game photo" />
          <h1>Hãy chọn từ đúng</h1>
        </div>

        {/* summary */}
        <div className={`${classes.summary} flex-center-between`}>
          <div>
            Câu <b>{current + 1}</b>
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

        {/* question */}
        <div className={classes.questionBox}>
          <p
            style={{ visibility: status === 0 ? 'hidden' : 'visible' }}
            className={`${classes.result} ${status === 1 ? 'right' : 'wrong'}`}>
            {status === 1 ? 'Chính xác' : 'Sai rồi'}
          </p>

          <span className={classes.question}>{mean}</span>
        </div>

        {/* answers */}
        <div
          className={`${classes.answers} ${
            status !== 0 ? 'disabled' : 'ani-fade'
          } `}>
          {answerList.map((answer, index) => (
            <div
              onClick={() => onAnswer(answer.word, index)}
              className={`${
                classes.answerItem
              } flex-center-col ${addClassAnswerItem(
                status,
                answerIndex,
                index,
                word,
                answer.word,
              )}`}
              key={index}>
              <p className="mb-2">{answer.word}</p>
              <span className="phonetic">/{answer.phonetic}/</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CorrectWord;

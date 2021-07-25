import Tooltip from '@material-ui/core/Tooltip';
import WrongIcon from '@material-ui/icons/Cancel';
import RightIcon from '@material-ui/icons/CheckCircle';
import HelpIcon from '@material-ui/icons/Help';
import incorrectAudio from 'assets/audios/incorrect.mp3';
import logoGame from 'assets/icons/games/word-match.png';
import TooltipCustom from 'components/UI/TooltipCustom';
import { UX } from 'constant';
import { onPlayAudio, playSoundAnswer } from 'helper/speaker.helper';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import CorrectWordResult from '../Result';
import SplitWord from './SplitWord';
import useStyle from './style';

function WordMatchGame({ list }) {
  const { voice, speed, volume } = useSelector((state) => state.voice);
  const classes = useStyle();
  const nQuestion = list.length;
  const [state, setState] = useState({
    current: 0,
    nRight: 0,
    nWrong: 0,
    resetFlag: -1,
  });
  const [isDelay, setIsDelay] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const { current, nRight, nWrong, resetFlag } = state;
  const nRightConsecutive = useRef({ top: 0, n: 0 });

  const handleDone = () => {
    setIsDone(true);
  };

  const handleCorrect = () => {
    playSoundAnswer(list[current].word, true, voice, volume, speed);
    setIsDelay(true);
    nRightConsecutive.current.n++;
    if (nRightConsecutive.current.n > nRightConsecutive.current.top) {
      nRightConsecutive.current.top = nRightConsecutive.current.n;
    }
    setTimeout(() => {
      if (current >= nQuestion) {
        handleDone();
      } else {
        setIsDelay(false);
        setState({
          current: current + 1,
          nRight: nRight + 1,
          resetFlag: current,
          nWrong,
        });
      }
    }, UX.DELAY_ANSWER);
  };

  const handleWrong = () => {
    nRightConsecutive.current.n = 0;
    onPlayAudio(incorrectAudio);
    setState({ ...state, nWrong: nWrong + 1 });
  };

  const handleNext = () => {
    onPlayAudio(incorrectAudio);
    if (current + 1 >= nQuestion) {
      setState({ ...state, nWrong: nWrong + 1 });
      handleDone();
    } else {
      setState({
        ...state,
        current: current + 1,
        nWrong: nWrong + 1,
        resetFlag: current,
      });
    }
  };

  const handleReplay = () => {
    setIsDone(false);
    setState({
      current: 0,
      nRight: 0,
      nWrong: 0,
      resetFlag: -1,
    });
    nRightConsecutive.current = { top: 0, n: 0 };
  };

  return (
    <div className="flex-center-col h-100vh">
      <div className={`${classes.root} container dyno-game-box position-rel`}>
        {/* title */}
        <div className="dyno-game-title">
          <img src={logoGame} alt="game photo" />
          <h1 className="flex-center--ver">
            <span>Ghép từ</span>
            <TooltipCustom title="Chọn các ký tự để tạo thành một từ có nghĩa đúng với từ tiếng Việt được cho">
              <HelpIcon className="ml-5" />
            </TooltipCustom>
          </h1>
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

            {list && list.length > 0 ? (
              <SplitWord
                mean={list[current].mean}
                word={list[current].word}
                onCorrect={handleCorrect}
                onWrong={handleWrong}
                resetFlag={resetFlag}
              />
            ) : (
              <h3 className="flex-center notfound-title">
                Gói từ vựng hiện tại không khả dụng, vui lòng thử lại sau. Cảm
                ơn !
              </h3>
            )}

            {current < nQuestion && (
              <Tooltip
                title={current < nQuestion - 1 ? 'Qua câu kế' : 'Kết thúc'}>
                <div
                  className={`nav-arrow next ${isDelay ? 'disabled' : ''}`}
                  onClick={handleNext}
                />
              </Tooltip>
            )}
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

WordMatchGame.propTypes = {
  list: PropTypes.array,
};

WordMatchGame.defaultProps = {
  list: [],
};

export default WordMatchGame;

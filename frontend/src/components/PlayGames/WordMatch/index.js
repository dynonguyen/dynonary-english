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
import SplitWord from './SplitWord';
import useStyle from './style';

function WordMatchGame({ list, onDone }) {
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
  const correctedList = useRef(new Set());

  const { current, nRight, nWrong, resetFlag } = state;

  const handleCorrect = () => {
    playSoundAnswer(list[current].word, true, voice, volume, speed);
    setIsDelay(true);
    setTimeout(() => {
      if (current >= nQuestion && correctedList.current) {
        onDone();
      } else {
        setIsDelay(false);
        setState({
          current: current + 1,
          nRight: correctedList.current.has(current) ? nRight : nRight + 1,
          resetFlag: current,
          nWrong,
        });
        correctedList.current.add(current);
      }
    }, UX.DELAY_ANSWER);
  };

  const handleWrong = () => {
    onPlayAudio(incorrectAudio);
    setState({ ...state, nWrong: nWrong + 1 });
  };

  const onNext = () => {
    setState({
      ...state,
      current: current + 1,
      resetFlag: current,
    });
  };

  const onPrev = () => {
    setState({
      ...state,
      current: current - 1,
      resetFlag: current,
    });
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
            Gói từ vựng hiện tại không khả dụng, vui lòng thử lại sau. Cảm ơn !
          </h3>
        )}

        {current !== 0 && (
          <div
            className={`nav-arrow prev ${isDelay ? 'disabled' : ''}`}
            onClick={onPrev}
          />
        )}
        {current < nQuestion - 1 && (
          <div
            className={`nav-arrow next ${isDelay ? 'disabled' : ''}`}
            onClick={onNext}
          />
        )}
      </div>
    </div>
  );
}

WordMatchGame.propTypes = {
  list: PropTypes.array,
  onDone: PropTypes.func,
};

WordMatchGame.defaultProps = {
  list: [],
  onDone: function () {},
};

export default WordMatchGame;

import WrongIcon from '@material-ui/icons/Cancel';
import RightIcon from '@material-ui/icons/CheckCircle';
import logoGame from 'assets/icons/games/word-match.png';
import React from 'react';
import SplitWord from './SplitWord';
import useStyle from './style';

function WordMatchGame() {
  const classes = useStyle();
  const current = 1,
    nQuestion = 1,
    nRight = 1,
    nWrong = 1;
  return (
    <div className="flex-center-col h-100vh container">
      <div className={`${classes.root} container dyno-game-box`}>
        {/* title */}
        <div className="dyno-game-title">
          <img src={logoGame} alt="game photo" />
          <h1>Ghép từ</h1>
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

        <SplitWord />
      </div>
    </div>
  );
}

export default WordMatchGame;

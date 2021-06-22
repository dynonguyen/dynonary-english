import React from 'react';
import logoGame from 'assets/icons/games/correct-word.png';
import useStyle from './style';
import RightIcon from '@material-ui/icons/CheckCircle';
import WrongIcon from '@material-ui/icons/Cancel';
function CorrectWord() {
  const classes = useStyle();

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
            Câu <b>1</b>
            &nbsp;/&nbsp;
            <b>150</b>
          </div>

          <div className="flex-center--ver">
            <b>1</b>&nbsp;Đúng{' '}
            <RightIcon className={`${classes.summaryIcon} right`} />
            &nbsp;-&nbsp;
            <b>5</b>&nbsp;Sai
            <WrongIcon className={`${classes.summaryIcon} wrong`} />
          </div>
        </div>

        {/* question */}
        <div className={classes.questionBox}>
          <p className={`${classes.result} wrong`}>Sai rồi</p>
          <span className={classes.question}>Vui vẻ</span>
        </div>

        {/* answers */}
        <div className={classes.answers}>
          <div className={`${classes.answerItem} flex-center-col right`}>
            <p className="mb-2">Happy</p>
            <span className="phonetic">/fəˈnetɪk/</span>
          </div>
          <div className={`${classes.answerItem} flex-center-col wrong`}>
            <p className="mb-2">Happy</p>
            <span className="phonetic">/fəˈnetɪk/</span>
          </div>
          <div className={`${classes.answerItem} flex-center-col`}>
            <p className="mb-2">Happy</p>
            <span className="phonetic">/fəˈnetɪk/</span>
          </div>
          <div className={`${classes.answerItem} flex-center-col`}>
            <p className="mb-2">Happy</p>
            <span className="phonetic">/fəˈnetɪk/</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CorrectWord;

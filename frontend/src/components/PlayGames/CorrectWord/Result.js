import Button from '@material-ui/core/Button';
import WrongIcon from '@material-ui/icons/Cancel';
import RightIcon from '@material-ui/icons/CheckCircle';
import winAudioSrc from 'assets/audios/win.mp3';
import cupIcon from 'assets/icons/others/cup.png';
import { ROUTES } from 'constant';
import { onPlayAudio } from 'helper/speaker.helper';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { cwResultStyle } from './style';

function CorrectWordResult({ nRight, nWrong, onReplay }) {
  const classes = cwResultStyle();
  const history = useHistory();

  // play win audio
  useEffect(() => {
    onPlayAudio(winAudioSrc);
  }, []);

  const onGoBack = () => {
    history.push(ROUTES.GAMES.HOME);
  };

  return (
    <div className={`${classes.root} flex-center-col`}>
      <img className={classes.img} src={cupIcon} alt="Cup Photo" />

      <div className={`${classes.result} flex-center--ver`}>
        <b>{nRight}</b>&nbsp;Đúng
        <RightIcon className={`${classes.icon} right`} />
        &nbsp;-&nbsp;
        <b>{nWrong}</b>&nbsp;Sai
        <WrongIcon className={`${classes.icon} wrong`} />
      </div>

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

CorrectWordResult.propTypes = {
  nRight: PropTypes.number,
  nWrong: PropTypes.number,
  onReplay: PropTypes.func,
};

CorrectWordResult.defaultProps = {
  nRight: 0,
  nWrong: 0,
  onReplay: function () {},
};

export default CorrectWordResult;

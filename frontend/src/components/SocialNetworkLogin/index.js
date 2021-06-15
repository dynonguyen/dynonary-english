// @coming soon
import fbIcon from 'assets/icons/fb-icon.png';
import ggIcon from 'assets/icons/gg-icon.png';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setMessage } from 'redux/slices/message.slice';
import useStyle from './style';

function SocialNetworkLogin() {
  const classes = useStyle();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      setMessage({
        message: 'Xin lỗi. Tính năng đang được cập nhật',
        type: 'warning',
      }),
    );
  };

  return (
    <>
      <div className={classes.socialBtn} onClick={handleClick}>
        <img className={classes.socialImg} src={fbIcon} alt="FB" />
        <span className={classes.socialName}>Facebook</span>
      </div>
      <div className={classes.socialBtn} onClick={handleClick}>
        <img className={classes.socialImg} src={ggIcon} alt="GG" />
        <span className={classes.socialName}>Google</span>
      </div>
    </>
  );
}

export default SocialNetworkLogin;

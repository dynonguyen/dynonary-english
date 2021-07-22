// @coming soon
import fbIcon from 'assets/icons/fb-icon.png';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setMessage } from 'redux/slices/message.slice';
import LoginGoogle from './Google';
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
    <div className="d-flex" style={{ margin: '0 -0.8rem' }}>
      <div className={classes.socialBtn} onClick={handleClick}>
        <img className={classes.socialImg} src={fbIcon} alt="FB" />
        <span className={classes.socialName}>Facebook</span>
      </div>
      <LoginGoogle />
    </div>
  );
}

export default SocialNetworkLogin;

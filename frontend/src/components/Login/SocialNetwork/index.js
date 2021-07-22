// @coming soon
import React from 'react';
import { useDispatch } from 'react-redux';
import { setMessage } from 'redux/slices/message.slice';
import LoginFacebook from './Facebook';
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
      <LoginFacebook />
      <LoginGoogle />
    </div>
  );
}

export default SocialNetworkLogin;

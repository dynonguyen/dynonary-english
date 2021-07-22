import accountApi from 'apis/accountApi';
import ggIcon from 'assets/icons/gg-icon.png';
import { UX } from 'constant';
import React from 'react';
import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';
import { setMessage } from 'redux/slices/message.slice';
import useStyle from './style';

function LoginGoogle() {
  const classes = useStyle();
  const dispatch = useDispatch();

  // handle success login
  const onLoginSuccess = async () => {
    try {
      dispatch(
        setMessage({
          type: 'success',
          message: 'Đăng nhập thành công',
          duration: UX.DELAY_TIME,
        }),
      );

      setTimeout(() => {
        location.href = '/';
      }, UX.DELAY_TIME);
    } catch (error) {}
  };

  // login
  const onLoginWithGoogle = async (res) => {
    try {
      const { accessToken } = res;

      const response = await accountApi.postLoginWithGoogle(accessToken);
      const { status, data } = response;

      if (status === 200) {
        onLoginSuccess(data);
      }
    } catch (error) {
      const message =
        error.response?.data?.message || 'Đăng nhập thất bại, thử lại !';
      dispatch(setMessage({ type: 'error', message }));
    }
  };

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      autoLoad={false}
      render={(renderProps) => (
        <div
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
          className={classes.socialBtn}>
          <img className={classes.socialImg} src={ggIcon} alt="GG" />
          <span className={classes.socialName}>Google</span>
        </div>
      )}
      onSuccess={onLoginWithGoogle}
      onFailure={onLoginWithGoogle}
      cookiePolicy={'single_host_origin'}
    />
  );
}

export default LoginGoogle;

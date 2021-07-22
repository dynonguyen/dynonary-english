import accountApi from 'apis/accountApi';
import fbIcon from 'assets/icons/fb-icon.png';
import { UX } from 'constant';
import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { useDispatch } from 'react-redux';
import { setMessage } from 'redux/slices/message.slice';
import useStyle from './style';

function LoginFacebook() {
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

  const responseFacebook = async (response) => {
    try {
      if (response?.accessToken) {
        const apiRes = await accountApi.postLoginWithFacebook(
          response.accessToken,
        );
        if (apiRes.status === 200) {
          onLoginSuccess();
        }
      }
    } catch (error) {
      const message =
        error.response?.data?.message || 'Đăng nhập thất bại, thử lại !';

      dispatch(
        setMessage({
          type: 'error',
          message,
          duration: UX.DELAY_TIME,
        }),
      );
    }
  };

  return (
    <FacebookLogin
      appId={process.env.REACT_APP_FACEBOOK_CLIENT_ID}
      autoload={false}
      callback={responseFacebook}
      render={(renderProps) => (
        <div className={classes.socialBtn} onClick={renderProps.onClick}>
          <img className={classes.socialImg} src={fbIcon} alt="FB" />
          <span className={classes.socialName}>Facebook</span>
        </div>
      )}
    />
  );
}

export default LoginFacebook;

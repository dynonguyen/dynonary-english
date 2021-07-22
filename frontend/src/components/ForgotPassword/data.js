import accountApi from 'apis/accountApi';
import { ROUTES, UX } from 'constant';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setMessage } from 'redux/slices/message.slice';
import ForgotPassword from '.';

function ForgotPasswordData() {
  const [loading, setLoading] = useState(false);
  const [mailSending, setMailSending] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSendMail = async (email) => {
    setMailSending(true);
    try {
      const apiRes = await accountApi.getSendVerifyCode(email);
      if (apiRes.status === 200) {
        dispatch(
          setMessage({
            type: 'success',
            message: 'Gửi mã thành công. Hãy kiểm tra email của bạn',
          }),
        );
      }
    } catch (error) {
    } finally {
      setMailSending(false);
    }
  };

  const handleResetPassword = async ({ email, verifyCode, password }) => {
    setLoading(true);
    setMailSending(true);
    try {
      const apiRes = await accountApi.postResetPassword(
        email,
        password,
        verifyCode,
      );

      if (apiRes.status === 200) {
        dispatch(
          setMessage({
            type: 'success',
            message: 'Đổi mật khẩu thành công',
            duration: UX.DELAY_TIME,
          }),
        );
        setTimeout(() => {
          history.push(ROUTES.LOGIN);
        }, UX.DELAY_TIME);
      }
    } catch (error) {
      const message =
        error.response?.data?.message || 'Đổi mật khẩu thất bại, thử lại !';
      dispatch(
        setMessage({
          type: 'error',
          message,
        }),
      );
    } finally {
      setLoading(false);
      setMailSending(false);
    }
  };

  return (
    <ForgotPassword
      loading={loading}
      mailSending={mailSending}
      onSendVerifyCode={handleSendMail}
      onSubmit={handleResetPassword}
    />
  );
}

export default ForgotPasswordData;

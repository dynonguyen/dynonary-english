import accountApi from 'apis/accountApi';
import { UX } from 'constant';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setMessage } from 'redux/slices/message.slice';
import Login from './index';

function LoginData() {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogin = async (account) => {
    try {
      setLoading(true);
      const { email, password } = account;

      const apiRes = await accountApi.postLogin(email.toLowerCase(), password);
      if (apiRes && apiRes.status === 200) {
        dispatch(
          setMessage({ message: 'Đăng nhập thành công', type: 'success' }),
        );
        setLoading(false);

        setTimeout(() => {
          history.push('/');
        }, UX.DELAY_TIME);
      }
    } catch (error) {
      const message = error.response?.data?.message || 'Thất bại, thử lại !';
      dispatch(setMessage({ message, type: 'error' }));
      setLoading(false);
    }
  };

  return <Login onLogin={handleLogin} loading={loading} />;
}

export default LoginData;

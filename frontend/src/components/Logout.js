import accountApi from 'apis/accountApi';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setMessage } from 'redux/slices/message.slice';
import GlobalLoading from './UI/GlobalLoading';

function Logout() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.userInfo);

  useEffect(() => {
    if (!isAuth) {
      history.goBack();
      return;
    }

    (async function () {
      try {
        const apiRes = await accountApi.postLogout();
        if (apiRes.status === 200) {
          dispatch(
            setMessage({ type: 'success', message: 'Đăng xuất thành công' }),
          );
          window.location.href = history.location.pathname;
        }
      } catch (error) {
        dispatch(
          setMessage({ type: 'error', message: 'Đăng xuất thất bại, thử lại' }),
        );
        history.goBack();
      }
    })();

    return () => {};
  }, []);

  return <>{isAuth && <GlobalLoading title="Đang đang xuất ..." />}</>;
}

export default Logout;

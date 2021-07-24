import accountApi from 'apis/accountApi';
import { formatDate } from 'helper';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setMessage } from 'redux/slices/message.slice';
import { setUserAvt } from 'redux/slices/userInfo.slice';
import UserAccount from '.';

function UserAccountData() {
  const [userInfo, setUserInfo] = useState({ email: null, createdDate: null });
  const dispatch = useDispatch();

  useEffect(() => {
    let isSub = true;

    (async function () {
      try {
        const apiRes = await accountApi.getUserProfile();

        if (apiRes.status === 200 && isSub) {
          const { email, createdDate } = apiRes.data;
          setUserInfo({ email, createdDate: formatDate(createdDate) });
        }
      } catch (error) {}
    })();

    return () => (isSub = false);
  }, []);

  const handleUploadAvt = async (src) => {
    try {
      const apiRes = await accountApi.putUpdateAvt(src);
      if (apiRes.status === 200) {
        dispatch(
          setMessage({
            type: 'success',
            message: 'Cập nhật ảnh đại diện thành công',
          }),
        );

        dispatch(setUserAvt(apiRes.data.newSrc));
      }
    } catch (error) {
      dispatch(
        setMessage({
          type: 'error',
          message: 'Cập nhật ảnh đại diện thất bại. Thử lại',
        }),
      );
    }
  };

  const handleUpdateProfile = async (name, username) => {
    try {
      const apiRes = await accountApi.putUpdateProfile(name, username);
      if (apiRes.status === 200) {
        dispatch(
          setMessage({
            type: 'success',
            message: 'Cập nhật thông tin thành công',
            duration: 500,
          }),
        );

        setTimeout(() => {
          location.reload();
        }, 750);
      }
    } catch (error) {
      const message =
        error.response?.data?.message ||
        'Chỉnh sửa thông tin thất bại, thử lại !';
      dispatch(setMessage({ type: 'error', message }));
    }
  };

  return (
    <UserAccount
      email={userInfo.email}
      createdDate={userInfo.createdDate}
      onUpload={handleUploadAvt}
      onUpdateProfile={handleUpdateProfile}
    />
  );
}

export default UserAccountData;

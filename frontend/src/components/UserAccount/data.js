import accountApi from 'apis/accountApi';
import { formatDate } from 'helper';
import React, { useEffect, useState } from 'react';
import UserAccount from '.';

function UserAccountData() {
  const [userInfo, setUserInfo] = useState({ email: null, createdDate: null });

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

  return (
    <UserAccount email={userInfo.email} createdDate={userInfo.createdDate} />
  );
}

export default UserAccountData;

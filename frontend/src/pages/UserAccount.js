import UserAccountData from 'components/UserAccount/data';
import useTitle from 'hooks/useTitle';
import React from 'react';

function UserAccountPage() {
  useTitle('Quản lý tài khoản');

  return <UserAccountData />;
}

export default UserAccountPage;

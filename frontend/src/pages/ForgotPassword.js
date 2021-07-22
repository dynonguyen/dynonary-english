import ForgotPasswordData from 'components/ForgotPassword/data';
import useCloseNavigation from 'hooks/useCloseNavigation';
import useTitle from 'hooks/useTitle';
import React from 'react';

function ForgotPasswordPage() {
  useTitle('Quên mật khẩu');
  useCloseNavigation();

  return (
    <div className="pos-rel w-100vw h-100vh">
      <div className="transform-center">
        <ForgotPasswordData />
      </div>
    </div>
  );
}

export default ForgotPasswordPage;

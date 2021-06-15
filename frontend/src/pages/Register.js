import Register from 'components/Register';
import HomeLinkButton from 'components/UI/HomeLinkButton';
import { ROUTES } from 'constant';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/login-signup.scss';

function RegisterPage() {
  return (
    <div className="pos-rel w-100vw h-100vh">
      <div className="transform-center">
        <Register />

        <div className="has-account">
          Bạn đã có tài khoản?&nbsp;
          <Link to={ROUTES.LOGIN} className="account-link">
            Đăng nhập
          </Link>
        </div>
      </div>

      <HomeLinkButton />
    </div>
  );
}

export default RegisterPage;

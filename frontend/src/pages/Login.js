import Login from 'components/Login';
import HomeLinkButton from 'components/UI/HomeLinkButton';
import { ROUTES } from 'constant';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/login-signup.scss';

function LoginPage() {
  return (
    <div className="pos-rel w-100vw h-100vh">
      <div className="transform-center">
        <Login />

        <div className="has-account">
          Bạn chưa có tài khoản?&nbsp;
          <Link to={ROUTES.REGISTER} className="account-link">
            Đăng ký
          </Link>
        </div>
      </div>

      <HomeLinkButton />
    </div>
  );
}

export default LoginPage;

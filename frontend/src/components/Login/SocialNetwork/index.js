import React from 'react';
import LoginFacebook from './Facebook';
import LoginGoogle from './Google';

function SocialNetworkLogin() {
  return (
    <div className="d-flex" style={{ margin: '0 -0.8rem' }}>
      <LoginFacebook />
      <LoginGoogle />
    </div>
  );
}

export default SocialNetworkLogin;

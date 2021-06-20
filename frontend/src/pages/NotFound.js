import useCloseNavigation from 'hooks/useCloseNavigation';
import useTitle from 'hooks/useTitle';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/not-found.scss';

function NotFoundPage() {
  useTitle('Không tìm thấy trang');
  useCloseNavigation();
  const arrBubble = new Array(5).fill(0);

  return (
    <div className="not-found">
      {arrBubble.map((_, key) => (
        <div key={key} className="not-found-bubble"></div>
      ))}

      <div className="not-found-main">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-content">
          <b>Ooops... Page not found.</b> <br />
          It looks like you are lost... That is a trouble?
        </p>
        <Link to="/">
          <button type="button" className="not-found-btn">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;

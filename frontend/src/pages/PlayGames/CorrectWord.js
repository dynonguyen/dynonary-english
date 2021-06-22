import CorrectWord from 'components/PlayGames/CorrectWord';
import useTitle from 'hooks/useTitle';
import React from 'react';

function CorrectWordPage() {
  useTitle('Hãy chọn từ đúng');
  return <CorrectWord />;
}

export default CorrectWordPage;

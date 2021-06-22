import CorrectWord from 'components/PlayGames/CorrectWord';
import useTitle from 'hooks/useTitle';
import React from 'react';

function CorrectWordPage() {
  useTitle("Game hãy chọn từ đúng (Let's choose the correct word)");
  return <CorrectWord />;
}

export default CorrectWordPage;

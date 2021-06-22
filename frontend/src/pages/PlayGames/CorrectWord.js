import CorrectWord from 'components/PlayGames/CorrectWord';
import useCloseNavigation from 'hooks/useCloseNavigation';
import useTitle from 'hooks/useTitle';
import React from 'react';

function CorrectWordPage() {
  useTitle("Game hãy chọn từ đúng (Let's choose the correct word)");
  useCloseNavigation();
  return <CorrectWord />;
}

export default CorrectWordPage;

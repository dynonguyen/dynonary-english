import CorrectWordData from 'components/PlayGames/CorrectWord/data';
import useCloseNavigation from 'hooks/useCloseNavigation';
import useScrollTop from 'hooks/useScrollTop';
import useTitle from 'hooks/useTitle';
import React from 'react';

function CorrectWordPage() {
  useScrollTop();
  useTitle("Game hãy chọn từ đúng (Let's choose the correct word)");
  useCloseNavigation();
  return <CorrectWordData />;
}

export default CorrectWordPage;

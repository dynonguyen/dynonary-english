import WordMatchGame from 'components/PlayGames/WordMatch';
import useCloseNavigation from 'hooks/useCloseNavigation';
import useTitle from 'hooks/useTitle';
import React from 'react';

function WordMatchGamePage() {
  useTitle('Game ghép từ (Word matching game)');
  useCloseNavigation();

  return <WordMatchGame />;
}

export default WordMatchGamePage;

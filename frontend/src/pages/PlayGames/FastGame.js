import FastGameData from 'components/PlayGames/FastGame/data';
import useCloseNavigation from 'hooks/useCloseNavigation';
import useTitle from 'hooks/useTitle';
import React from 'react';

function FastGamePage() {
  useTitle('Game tay nhanh hơn não');
  useCloseNavigation();
  return <FastGameData />;
}

export default FastGamePage;

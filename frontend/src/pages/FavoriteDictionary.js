import FavoriteDictionaryData from 'components/DynoDictionary/Favorite/data';
import useCloseNavigation from 'hooks/useCloseNavigation';
import useTitle from 'hooks/useTitle';
import React from 'react';

function FavoriteDictionaryPage() {
  useTitle('Danh sách từ vựng yêu thích');
  useCloseNavigation();

  return <FavoriteDictionaryData />;
}

export default FavoriteDictionaryPage;

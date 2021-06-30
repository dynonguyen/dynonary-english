import FavoriteIcon from '@material-ui/icons/Favorite';
import UnFavoriteIcon from '@material-ui/icons/FavoriteBorder';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
// @fake data
const favoriteList = ['Hello', 'name', 'code'];

function WordFavorite({ word }) {
  const [isFavorite, setIsFavorite] = useState(
    () =>
      favoriteList.findIndex((i) => i.toLowerCase() === word.toLowerCase()) !==
      -1,
  );

  const handleClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      {isFavorite ? (
        <FavoriteIcon onClick={handleClick} className="dyno-favorite active" />
      ) : (
        <UnFavoriteIcon onClick={handleClick} className="dyno-favorite" />
      )}
    </>
  );
}

WordFavorite.propTypes = {
  word: PropTypes.string,
};

WordFavorite.defaultProps = {
  word: '',
};

export default WordFavorite;

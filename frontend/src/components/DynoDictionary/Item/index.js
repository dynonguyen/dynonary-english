import Speaker from 'components/UI/Speaker';
import WordFavorite from 'components/UI/WordFavorite';
import React from 'react';
import useStyle from './style';

function DynoDictionaryItem() {
  const classes = useStyle();
  return (
    <div className={`${classes.root} flex-center-between`}>
      <div>
        <h3 className={classes.word}>Morning</h3>
        <p className={`${classes.phonetic} phonetic`}>/ ˈmɔːnɪŋ /</p>
        <p className={classes.mean}>
          Buổi sáng, Ngày mới Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Ut, enim.
        </p>
      </div>

      <div className="flex-center--ver">
        <div className="mr-5">
          <Speaker text="Morning" />
        </div>
        <WordFavorite word="hello" />
      </div>
    </div>
  );
}

export default DynoDictionaryItem;

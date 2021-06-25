import Speaker from 'components/UI/Speaker';
import PropTypes from 'prop-types';
import React from 'react';
import useStyle from './style';

function SlideItem({ mean, word, type, phonetic, example, picture }) {
  const classes = useStyle({ picture });
  return (
    <div className={classes.root}>
      <div className={classes.picture} />
      <div className={`${classes.content} flex-center-col`}>
        <h2 className={classes.mean}>{mean}</h2>
        <h3 className={`${classes.word} flex-center--ver`}>
          <span>{word}</span> <Speaker className="ml-4" text={word} />
        </h3>
        <p className={classes.type}>({type})</p>
        <p className={classes.phonetic}>/{phonetic}/</p>
        {example && example !== '' && (
          <p className={classes.example}>{example}</p>
        )}
      </div>
    </div>
  );
}

SlideItem.propTypes = {
  example: PropTypes.string,
  mean: PropTypes.string,
  phonetic: PropTypes.string,
  type: PropTypes.string,
  word: PropTypes.string,
  picture: PropTypes.string,
};

export default SlideItem;

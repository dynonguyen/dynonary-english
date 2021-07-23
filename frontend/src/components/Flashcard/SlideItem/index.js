import Speaker from 'components/UI/Speaker';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import useStyle from './style';

function SliceExample({ word, example }) {
  const index = example.toLowerCase().indexOf(word.toLowerCase());

  return (
    <>
      {index === -1 ? (
        example
      ) : (
        <>
          {example.slice(0, index)}
          <b>{word}</b>
          {example.slice(index + word.length)}
        </>
      )}
    </>
  );
}

function SlideItem({ mean, word, type, phonetic, example, picture, showMean }) {
  const classes = useStyle({ picture });

  useEffect(() => {
    const item = document.getElementsByClassName(classes.root)[0];
    item.classList.remove('ani-fade');
    setTimeout(() => {
      item.classList.add('ani-fade');
    }, 0);
    return () => {};
  });

  return (
    <div className={`${classes.root} ani-fade`}>
      {word && word !== '' && (
        <>
          <div className={classes.picture} />
          <div className={`${classes.content} flex-center-col`}>
            {showMean && <h2 className={classes.mean}>{mean}</h2>}
            <h3 className={`${classes.word} flex-center--ver`}>
              <span>{word}</span> <Speaker className="ml-4" text={word} />
            </h3>
            {Boolean(type) && <p className={classes.type}>({type})</p>}
            {Boolean(phonetic) && (
              <p className={classes.phonetic}>/{phonetic}/</p>
            )}
            {example && example !== '' && (
              <p className={classes.example}>
                <SliceExample word={word} example={example} />
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
}

SlideItem.propTypes = {
  example: PropTypes.string,
  mean: PropTypes.string,
  phonetic: PropTypes.string,
  picture: PropTypes.string,
  showMean: PropTypes.bool,
  type: PropTypes.string,
  word: PropTypes.string,
};

SliceExample.propTypes = {
  example: PropTypes.string,
  word: PropTypes.string,
};

export default SlideItem;

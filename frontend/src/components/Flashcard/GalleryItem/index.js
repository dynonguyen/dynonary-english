import { onTextToSpeech } from 'helper/speaker.helper';
import useSpeaker from 'hooks/useSpeaker';
import PropTypes from 'prop-types';
import React from 'react';
import useStyle from './style';

function GalleryItem({ word, mean, phonetic, type, picture, showMean }) {
  const classes = useStyle({ picture });
  const { voice, speed, volume } = useSpeaker();

  const handleSpeakWord = () => {
    if (word && word !== '') {
      onTextToSpeech(word, voice, speed, volume);
    }
  };

  return (
    <div
      className={`${classes.root} flex-center cur-pointer position-rel`}
      onClick={handleSpeakWord}>
      <div className="bg" />
      <div className={classes.content}>
        {showMean && <h2 className={classes.mean}>{mean}</h2>}
        <h2 className={classes.word}>{word}</h2>
        <p className={classes.phonetic}>
          /{phonetic}/ ({type})
        </p>
      </div>
    </div>
  );
}

GalleryItem.propTypes = {
  mean: PropTypes.string,
  phonetic: PropTypes.string,
  picture: PropTypes.string,
  showMean: PropTypes.bool,
  type: PropTypes.string,
  word: PropTypes.string,
};

GalleryItem.defaultProps = {
  mean: 'Mean',
  phonetic: 'phonetic',
  word: 'word',
  type: 'n',
  picture: '',
};

export default GalleryItem;

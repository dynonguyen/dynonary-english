import PropTypes from 'prop-types';
import Speaker from 'components/UI/Speaker';
import React from 'react';
import useStyle from './style';

function CommunicationPhraseItem({ mean, sentence }) {
  const classes = useStyle();
  return (
    <div className={`${classes.root} flex-center-between`}>
      <div className="mr-4 w-100">
        <div className={classes.mean}>{mean}</div>
        <div className={classes.phrase}>{sentence}</div>
      </div>

      <Speaker text={sentence} />
    </div>
  );
}

CommunicationPhraseItem.propTypes = {
  mean: PropTypes.string,
  sentence: PropTypes.string,
};

CommunicationPhraseItem.defaultProps = {
  mean: '',
  sentence: '',
};

export default CommunicationPhraseItem;

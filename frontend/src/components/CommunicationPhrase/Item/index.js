import PropTypes from 'prop-types';
import Speaker from 'components/UI/Speaker';
import React from 'react';
import useStyle from './style';

function CommunicationPhraseItem({ mean, phrase }) {
  const classes = useStyle();
  return (
    <div className={`${classes.root} flex-center-between`}>
      <div>
        <div className={classes.mean}>{mean}</div>
        <div className={classes.phrase}>{phrase}</div>
      </div>

      <Speaker text={phrase} />
    </div>
  );
}

CommunicationPhraseItem.propTypes = {
  mean: PropTypes.string,
  phrase: PropTypes.string,
};

CommunicationPhraseItem.defaultProps = {
  mean: '',
  phrase: '',
};

export default CommunicationPhraseItem;

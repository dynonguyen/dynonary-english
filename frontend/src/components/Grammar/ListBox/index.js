import PropTypes from 'prop-types';
import React from 'react';
import useStyle from './style';

function GrammarListBox({ number, title, desc }) {
  const classes = useStyle();
  return (
    <div className={`${classes.root} d-flex cur-pointer`}>
      <div className={`${classes.number} flex-center`}>{number}</div>
      <div className={classes.content}>
        <div className={classes.title}>{title}</div>
        <div className={classes.desc}>{desc}</div>
      </div>
    </div>
  );
}

GrammarListBox.propTypes = {
  desc: PropTypes.string,
  number: PropTypes.string,
  title: PropTypes.string,
};

GrammarListBox.defaultProps = {
  desc: 'description',
  number: 0,
  title: 'title',
};

export default GrammarListBox;

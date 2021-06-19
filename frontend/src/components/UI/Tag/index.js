import PropTypes from 'prop-types';
import React, { useState } from 'react';
import useStyle from './style';

function Tag({ title, iconSrc }) {
  const classes = useStyle();
  const [isActive, setIsActive] = useState(false);

  const onClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`${classes.root} flex-center--ver cur-pointer ${
        isActive ? 'active' : ''
      }`}
      onClick={onClick}>
      <img className={classes.icon} src={iconSrc} alt="icon" />
      <span className={classes.text}>{title}</span>
    </div>
  );
}

Tag.propTypes = {
  iconSrc: PropTypes.any,
  title: PropTypes.string,
};

Tag.defaultProps = {
  iconSrc: null,
  title: 'Title',
};

export default Tag;

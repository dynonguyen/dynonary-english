import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import useStyle from './style';

function Tag({ title, iconSrc, id, onChange, resetFlag }) {
  const classes = useStyle();
  const [isActive, setIsActive] = useState(false);

  const onClick = () => {
    onChange(id, !isActive);
    setIsActive(!isActive);
  };

  useEffect(() => {
    if (!resetFlag) return;
    // reset value if parent component reset, except first render
    setIsActive(false);
  }, [resetFlag]);

  return (
    <div
      className={`${classes.root} flex-center--ver cur-pointer ${
        isActive ? 'active' : ''
      }`}
      onClick={onClick}>
      {iconSrc && <img className={classes.icon} src={iconSrc} alt="icon" />}
      <span className={classes.text}>{title}</span>
    </div>
  );
}

Tag.propTypes = {
  id: PropTypes.string,
  iconSrc: PropTypes.any,
  title: PropTypes.string,
  onChange: PropTypes.func,
  resetFlag: PropTypes.number,
};

Tag.defaultProps = {
  id: '',
  iconSrc: null,
  title: 'Title',
  onChange: function () {},
  resetFlag: 0,
};

export default Tag;

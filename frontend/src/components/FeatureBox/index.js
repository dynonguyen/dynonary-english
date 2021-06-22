import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import useStyle from './style';

function FeatureBox({ to, imgUrl, title, subTitle }) {
  const classes = useStyle();
  return (
    <Link to={to} className={`${classes.root} flex-center--ver w-100`}>
      <img className={classes.icon} src={imgUrl} alt="Icon" />
      <div>
        <h2 className={classes.title}>{title}</h2>
        <p className={classes.subTitle}>{subTitle}</p>
      </div>
    </Link>
  );
}

FeatureBox.propTypes = {
  imgUrl: PropTypes.string,
  title: PropTypes.string,
  to: PropTypes.string,
  subTitle: PropTypes.string,
};

FeatureBox.defaultProps = {
  imgUrl: '',
  title: '',
  to: '',
  subTitle: '',
};

export default FeatureBox;

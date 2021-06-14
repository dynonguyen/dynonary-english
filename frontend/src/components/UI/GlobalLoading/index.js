import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import useToggleOverlay from 'hooks/useToggleOverlay';
import React from 'react';
import useStyle from './style';

function GlobalLoading({ title }) {
  const classes = useStyle();
  useToggleOverlay();

  return (
    <div className={classes.root}>
      <CircularProgress className={classes.icon} size="4.4rem" />
      <h2 className={classes.text}>{title}</h2>
    </div>
  );
}

GlobalLoading.propTypes = {
  title: PropTypes.string,
};

GlobalLoading.defaultProps = {
  title: 'Đang tải dữ liệu ...',
};

export default GlobalLoading;

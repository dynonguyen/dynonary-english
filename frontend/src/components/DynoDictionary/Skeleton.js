import PropTypes from 'prop-types';
import Skeleton from '@material-ui/lab/Skeleton';
import React from 'react';

function DynoDictionarySkeleton({ className }) {
  return (
    <div className={className}>
      {new Array(10).fill(0).map((_, index) => (
        <Skeleton key={index} animation="wave" variant="rect" />
      ))}
    </div>
  );
}

DynoDictionarySkeleton.propTypes = {
  className: PropTypes.string,
};

export default DynoDictionarySkeleton;

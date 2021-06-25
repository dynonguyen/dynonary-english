import Tooltip from '@material-ui/core/Tooltip';
import PrevIcon from '@material-ui/icons/ArrowBackIos';
import NextIcon from '@material-ui/icons/ArrowForwardIos';
import Skeleton from '@material-ui/lab/Skeleton';
import PropTypes from 'prop-types';
import React from 'react';
import GalleryItem from '../GalleryItem';
import useStyle from './style';

function GalleryList({ list, onPrev, onNext, total, current }) {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      {list && list.length > 0 ? (
        <>
          {/* gallery */}
          {list.slice(0, 7).map((item, index) => (
            <GalleryItem key={index} {...item} />
          ))}

          {/* navigation arrow */}
          {current > 1 && (
            <Tooltip title="Lùi trang cũ">
              <PrevIcon
                className={`${classes.arrowIcon} prev`}
                onClick={onPrev}
              />
            </Tooltip>
          )}
          {current < total && (
            <Tooltip title="Trang kế tiếp">
              <NextIcon
                className={`${classes.arrowIcon} next`}
                onClick={onNext}
              />
            </Tooltip>
          )}
        </>
      ) : (
        <>
          {new Array(7).fill(0).map((_, index) => (
            <div key={index}>
              <Skeleton
                className="w-100 h-100"
                variant="rect"
                animation="wave"
              />
            </div>
          ))}
        </>
      )}
    </div>
  );
}

GalleryList.propTypes = {
  list: PropTypes.array,
  onPrev: PropTypes.func,
  onNext: PropTypes.func,
  total: PropTypes.number,
  current: PropTypes.number,
};

GalleryList.defaultProps = {
  list: [],
  onPrev: function () {},
  onNext: function () {},
  total: 1,
  current: 1,
};

export default GalleryList;

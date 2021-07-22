import Tooltip from '@material-ui/core/Tooltip';
import Skeleton from '@material-ui/lab/Skeleton';
import PropTypes from 'prop-types';
import React from 'react';
import GalleryItem from '../GalleryItem';
import useStyle from './style';

function GalleryList({ list, onPrev, onNext, total, current, showMean }) {
  const classes = useStyle();

  return (
    <div className={`${classes.root} dyno-container`}>
      {list && list.length > 0 ? (
        <>
          {/* gallery */}
          {list.slice(0, 7).map((item, index) => (
            <GalleryItem key={index} {...item} showMean={showMean} />
          ))}

          {/* navigation arrow */}
          {current > 1 && (
            <Tooltip title="Lùi trang cũ">
              <span className="nav-arrow prev" onClick={onPrev} />
            </Tooltip>
          )}
          {current < total && (
            <Tooltip title="Trang kế tiếp">
              <span className="nav-arrow next" onClick={onNext} />
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
  current: PropTypes.number,
  list: PropTypes.array,
  onNext: PropTypes.func,
  onPrev: PropTypes.func,
  showMean: PropTypes.bool,
  total: PropTypes.number,
};

GalleryList.defaultProps = {
  list: [],
  onPrev: function () {},
  onNext: function () {},
  total: 1,
  current: 1,
};

export default GalleryList;

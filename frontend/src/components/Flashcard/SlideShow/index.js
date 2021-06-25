import Tooltip from '@material-ui/core/Tooltip';
import Skeleton from '@material-ui/lab/Skeleton';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import SlideItem from '../SlideItem';
import useStyle from './style';

function SlideShow({ list, total, onGetNewList, onGetOldList, showMean }) {
  const classes = useStyle();
  const [current, setCurrent] = useState(0);
  const count = useRef(0); // count all item current
  const onPrev = () => {
    if (current !== 0) {
      setCurrent(current - 1);
    } else {
      setCurrent(list.length - 1);
      onGetOldList();
    }
    count.current--;
  };
  const onNext = () => {
    if (current < list.length - 1) {
      setCurrent(current + 1);
      if (current + 1 === list.length - 1) {
        onGetNewList();
      }
    } else {
      setCurrent(0);
    }
    count.current++;
  };

  return (
    <div className={`${classes.wrapper} flex-center--ver position-rel`}>
      {list && list.length > 0 ? (
        <>
          <SlideItem
            {...list[current]}
            example={list[current]?.examples[0]}
            showMean={showMean}
          />

          {/* navigation arrow */}
          {count.current > 0 && (
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
        <Skeleton
          variant="rect"
          className={`${classes.skeleton} w-100`}
          animation="wave"
          style={{ height: '576px' }}
        />
      )}
    </div>
  );
}

SlideShow.propTypes = {
  list: PropTypes.array,
  onGetNewList: PropTypes.func,
  onGetOldList: PropTypes.func,
  showMean: PropTypes.bool,
  total: PropTypes.number,
};

SlideShow.defaultProps = {
  list: [],
  total: 0,
};

export default SlideShow;

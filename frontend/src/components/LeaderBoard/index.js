import Skeleton from '@material-ui/lab/Skeleton';
import { DEFAULTS } from 'constant';
import PropTypes from 'prop-types';
import React from 'react';
import useStyle from './style';

const MAX_LEN_NAME = 20;

function LeaderBoardItem({ classes, nthTop, avt, name, score, unit }) {
  const nameReduced =
    Boolean(name) && name.length >= MAX_LEN_NAME
      ? `${name.slice(0, 17)}...`
      : name;
  const avtSrc = Boolean(avt) ? avt : DEFAULTS.IMAGE_SRC;
  const color =
    nthTop === 1
      ? '#FFAA00'
      : nthTop === 2
      ? '#C0C0C0'
      : nthTop === 3
      ? '#cd7f32'
      : '#EC4B76';

  return (
    <div
      className={classes.box}
      style={{ borderColor: nthTop <= 3 ? color : '' }}>
      <img src={avtSrc} alt="Avatar" className={classes.avt} />

      <div className={classes.content}>
        <h5 className={classes.name}>{nameReduced}</h5>
        <p>
          <span className={classes.count}>
            {score}&nbsp;{unit}
          </span>
        </p>
      </div>

      <div className={classes.nthTop} style={{ backgroundColor: color }}>
        {nthTop}
      </div>
    </div>
  );
}

function LeaderBoard({ title, list, color, loading }) {
  const classes = useStyle({ color });
  const sortedList =
    list && list.sort((a, b) => Number(a.score) - Number(b.score));

  return (
    <div className={classes.root}>
      <div className={classes.titleWrap}>
        <h3 className={classes.title}>{title}</h3>
      </div>

      <div className={classes.boxWrap}>
        {!loading
          ? list &&
            sortedList.map((item, index) => (
              <LeaderBoardItem key={index} nthTop={index + 1} />
            ))
          : new Array(10)
              .fill(0)
              .map((_, index) => (
                <Skeleton
                  className={classes.skeleton}
                  key={index}
                  animation="wave"
                  variant="rect"
                />
              ))}
      </div>
    </div>
  );
}

LeaderBoard.propTypes = {
  color: PropTypes.string,
  list: PropTypes.array,
  title: PropTypes.string,
  loading: PropTypes.bool,
};

export default LeaderBoard;

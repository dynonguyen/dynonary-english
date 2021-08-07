import highscoreApi from 'apis/highscoreApi';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import LeaderBoard from '.';

function LeaderBoardData({ color, title, nameId, unit, tooltip }) {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isSub = true;

    (async function () {
      try {
        const apiRes = await highscoreApi.getLeaderboard(nameId);
        if (apiRes.status === 200) {
          const { list = [] } = apiRes.data;
          setLoading(false);
          setList(list);
        }
      } catch (error) {}
    })();

    return () => (isSub = false);
  }, []);

  return (
    <LeaderBoard
      list={list}
      loading={loading}
      color={color}
      title={title}
      unit={unit}
      tooltip={tooltip}
    />
  );
}

LeaderBoardData.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  nameId: PropTypes.string,
  unit: PropTypes.string,
  tooltip: PropTypes.string,
};

export default LeaderBoardData;

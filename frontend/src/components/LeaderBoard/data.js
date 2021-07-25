import PropTypes from 'prop-types';
import React from 'react';
import LeaderBoard from '.';
const list = [];

function LeaderBoardData({ color, title, nameId }) {
  return <LeaderBoard list={list} loading={true} color={color} title={title} />;
}

LeaderBoardData.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  nameId: PropTypes.string,
};

export default LeaderBoardData;

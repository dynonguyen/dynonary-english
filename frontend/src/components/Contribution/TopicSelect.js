import { Button, Collapse } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import animalIcon from 'assets/icons/topics/animal.png';
import bodyIcon from 'assets/icons/topics/body.png';
import feelIcon from 'assets/icons/topics/feel.png';
import foodIcon from 'assets/icons/topics/food.png';
import healthIcon from 'assets/icons/topics/health.png';
import jobIcon from 'assets/icons/topics/job.png';
import socialIcon from 'assets/icons/topics/social.png';
import treeIcon from 'assets/icons/topics/tree.png';
import Tag from 'components/UI/Tag';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { topicStyle as useStyle } from './style';

const topics = [
  {
    key: '0',
    title: 'Thực vật',
    icon: treeIcon,
  },
  {
    key: '1',
    title: 'Xã hội',
    icon: socialIcon,
  },
  {
    key: '2',
    title: 'Nghề nghiệp',
    icon: jobIcon,
  },
  {
    key: '3',
    title: 'Đồ ăn',
    icon: foodIcon,
  },
  {
    key: '4',
    title: 'Cơ thể con người',
    icon: bodyIcon,
  },
  {
    key: '5',
    title: 'Cảm xúc',
    icon: feelIcon,
  },
  {
    key: '6',
    title: 'Con vật',
    icon: animalIcon,
  },
  {
    key: '7',
    title: 'Sức khoẻ',
    icon: healthIcon,
  },
];

function TopicSelect({ onChange, resetFlag }) {
  const classes = useStyle();
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Grid item xs={12} md={6} lg={4}>
        <Button
          color="secondary"
          variant="contained"
          endIcon={visible ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          className={`${classes.button} w-100 h-100`}
          onClick={() => setVisible(!visible)}>
          Thêm chủ đề
        </Button>
      </Grid>
      <Grid item xs={12} className={visible ? '' : classes.tagsWrap}>
        <Collapse in={visible}>
          <div className={classes.tags}>
            {topics.map((topic, index) => (
              <Tag
                resetFlag={resetFlag}
                iconSrc={topic.icon}
                title={topic.title}
                key={index}
                id={topic.key}
                onChange={onChange}
              />
            ))}
          </div>
        </Collapse>
      </Grid>
    </>
  );
}

TopicSelect.propTypes = {
  onChange: PropTypes.func,
  resetFlag: PropTypes.number,
};

TopicSelect.defaultProps = {
  onChange: () => {},
  resetFlag: 0,
};

export default TopicSelect;

import { Button, Collapse } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Tag from 'components/UI/Tag';
import { TOPICS } from 'constant/topics';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { topicStyle as useStyle } from './style';

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
            {TOPICS.map((topic, index) => (
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

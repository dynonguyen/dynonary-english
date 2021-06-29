import { Button, Collapse } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Tag from 'components/UI/Tag';
import { TOPICS } from 'constant/topics';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import useStyle from './style';

function TopicSelect({
  onChange,
  resetFlag,
  buttonTitle,
  topicList,
  buttonWrapper,
  tagsWrapper,
}) {
  const classes = useStyle();
  const [visible, setVisible] = useState(false);
  const topics = useRef([]);

  const ButtonWrapper = buttonWrapper || Grid;
  const TagsWrapper = tagsWrapper || Grid;

  const handleTopicChange = (id, isActive) => {
    if (isActive) {
      topics.current.push(id);
    } else {
      topics.current = topics.current.filter((i) => i !== id);
    }

    onChange(topics.current);
  };

  useEffect(() => {
    if (!resetFlag) return;
    // reset value if parent component reset, except first render
    topics.current = [];
  }, [resetFlag]);

  return (
    <>
      <ButtonWrapper>
        <Button
          color="secondary"
          variant="contained"
          endIcon={visible ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          className={`${classes.button} w-100 h-100`}
          onClick={() => setVisible(!visible)}>
          {buttonTitle}
        </Button>
      </ButtonWrapper>
      <TagsWrapper className={visible ? '' : classes.tagsWrap}>
        <Collapse in={visible}>
          <div className={classes.tags}>
            {topicList.map((topic, index) => (
              <Tag
                resetFlag={resetFlag}
                iconSrc={topic.icon}
                title={topic.title}
                key={index}
                id={topic.key}
                onChange={handleTopicChange}
              />
            ))}
          </div>
        </Collapse>
      </TagsWrapper>
    </>
  );
}

TopicSelect.propTypes = {
  onChange: PropTypes.func,
  resetFlag: PropTypes.number,
  buttonTitle: PropTypes.string,
  topicList: PropTypes.array,
  buttonWrapper: PropTypes.any,
  tagsWrapper: PropTypes.any,
};

TopicSelect.defaultProps = {
  onChange: () => {},
  resetFlag: 0,
  buttonTitle: 'Chọn chủ đề',
  topicList: TOPICS,
};

export default TopicSelect;

import { TOPICS } from 'constant/topics';
import React from 'react';
import useStyle from './style';

function FastGame() {
  const classes = useStyle();

  return (
    <div className={`flex-center ${classes.wrapper}`}>
      <div className={`${classes.bg} w-100 h-100`}></div>

      <div className="container">
        <div className={classes.root}>
          <div className={classes.selectTopic}>
            <h1>Chọn một chủ đề</h1>
          </div>
          <div className={classes.topics}>
            {TOPICS.map((topic, index) => (
              <div key={index} className={classes.topicItem}>
                <img
                  src={topic.icon}
                  className={classes.topicImg}
                  alt={topic.title}
                />
                <h3 className={classes.topicTitle}>{topic.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FastGame;

import { TOPICS } from 'constant/topics';
import React, { useState } from 'react';
import FastGame from '.';
import useStyle from './style';
const list = [
  {
    word: 'Word',
    picture: 'https://picsum.photos/150/150',
  },
  {
    word: 'Word 2',
    picture: 'https://picsum.photos/150/150',
  },
  {
    word: 'Word 3',
    picture: 'https://picsum.photos/150/150',
  },
  {
    word: 'Word 4',
    picture: 'https://picsum.photos/150/150',
  },
  {
    word: 'Word 5',
    picture: 'https://picsum.photos/150/150',
  },
];

function FastGameData() {
  const classes = useStyle();
  const [topicKey, setTopicKey] = useState(-1);

  const renderTopic = () => (
    <>
      <div className={classes.title}>
        <h1>Chọn một chủ đề</h1>
      </div>
      <div className={classes.topics}>
        {TOPICS.map((topic, index) => (
          <div
            key={index}
            className={classes.topicItem}
            onClick={() => setTopicKey(topic.key)}>
            <img
              src={topic.icon}
              className={classes.topicImg}
              alt={topic.title}
            />
            <h3 className={classes.topicTitle}>{topic.title}</h3>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className={`flex-center ${classes.wrapper}`}>
      <div className={`${classes.bg} w-100 h-100`}></div>

      <div className="container">
        <div className={classes.root}>
          {topicKey < 0 ? (
            renderTopic()
          ) : (
            <FastGame topic={topicKey} list={list} />
          )}
        </div>
      </div>
    </div>
  );
}

export default FastGameData;

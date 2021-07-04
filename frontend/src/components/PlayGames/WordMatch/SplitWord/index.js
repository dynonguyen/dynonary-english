import Tooltip from '@material-ui/core/Tooltip';
import HelpIcon from '@material-ui/icons/LiveHelp';
import Speaker from 'components/UI/Speaker';
import React from 'react';
import useStyle from './style';

function splitWord(word = '') {
  let splitArr = [];
  let failFlag = 1;

  while (failFlag) {
    // Prevent infinite loop
    if (failFlag >= 50) {
      break;
    }

    splitArr = word.split('').sort((_) => Math.random() - 0.5);

    if (splitArr.join('') === word) {
      failFlag++;
    } else {
      failFlag = 0;
      break;
    }
  }

  return splitArr;
}

function SplitWord() {
  const word = 'Hello',
    question = 'Xin chào';

  const splitArr = splitWord(word.toLowerCase());

  const classes = useStyle();
  return (
    <div className={classes.root}>
      <div className={`${classes.split} flex-center`}></div>

      <div>
        <div className="flex-center-between my-4">
          <Tooltip title="Xem đáp án">
            <HelpIcon className={`${classes.helpIcon} cur-pointer`} />
          </Tooltip>
          <p className={classes.mean}>{question}</p>
          <Speaker className={classes.speaker} text={word} />
        </div>
        <p className={`${classes.answer} t-center right`}>Chính xác</p>
      </div>

      <div className={`${classes.split} flex-center`}>
        {splitArr &&
          splitArr.length > 0 &&
          splitArr.map((ch, index) => (
            <div key={index} className={classes.char}>
              {ch}
            </div>
          ))}
      </div>
    </div>
  );
}

export default SplitWord;

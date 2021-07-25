import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import HelpIcon from '@material-ui/icons/LiveHelp';
import wordApi from 'apis/wordApi';
import Speaker from 'components/UI/Speaker';
import WordDetailModal from 'components/UI/WordDetailModal';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import useStyle from './style';
const userSplitId = 'userSplitId';

function splitWord(word = '') {
  let splitArr = [];
  let failFlag = 1;

  while (failFlag) {
    // Prevent infinite loop
    if (failFlag >= 50) {
      break;
    }

    splitArr = word.split('').sort(() => Math.random() - 0.5);

    if (splitArr.join('') === word) {
      failFlag++;
    } else {
      failFlag = 0;
      break;
    }
  }

  return splitArr;
}

function SplitWord({ word, mean, onCorrect, onWrong, resetFlag }) {
  const originSplit = useRef(splitWord(word.toLowerCase()));
  const [userSplit, setUserSplit] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  const [modal, setModal] = useState({
    show: false,
    loading: false,
    data: null,
  });
  const classes = useStyle();

  // animation for select a character
  const aniStyle = makeStyles({
    slideAni: {
      position: 'relative',

      '&:before': {
        position: 'absolute',
        top: 0,
        content: `"${userSplit[userSplit.length - 1]?.ch}"`,
        width: '100%',
        height: '100%',
        backgroundColor: 'var(--bg-color-accent)',

        animationName: 'aniSlide',
        animationDuration: '0.35s',
        animationFillMode: 'forwards',
      },
    },
  })();

  const handleSelectCharacter = (index) => {
    const newUserSplit = [
      ...userSplit,
      { index, ch: originSplit.current[index] },
    ];
    setUserSplit(newUserSplit);

    if (newUserSplit.length === word.length) {
      setIsCheck(true);
    }
  };

  const handleReturnCharacter = (index) => {
    if (isCheck) {
      setIsCheck(false);
    }

    const newUserSplit = userSplit.slice(0, index);
    setUserSplit(newUserSplit);
  };

  const renderOriginSplit = () => {
    return originSplit.current.map((ch, index) => {
      const isSelected =
        userSplit.findIndex((item) => index === item.index) !== -1;

      return (
        <div
          key={index}
          className={`${classes.char} ${
            isSelected ? ` ${aniStyle.slideAni} disabled` : ''
          }`}
          onClick={() => handleSelectCharacter(index)}>
          {isSelected ? '' : ch}
        </div>
      );
    });
  };

  const renderUserSplit = () => {
    return userSplit.map((item, key) => {
      const correctClass =
        item.ch === word.toLowerCase()[key] ? 'right' : 'wrong';
      return (
        <div
          key={key}
          className={`${classes.char} ${isCheck ? correctClass : ''}`}
          onClick={() => handleReturnCharacter(key)}>
          {item.ch}
        </div>
      );
    });
  };

  // check is correct
  useEffect(() => {
    let isSub = true;

    if (!isCheck) {
      return;
    }

    const answer = userSplit.map((i) => i.ch).join('');
    if (answer.toLowerCase() === word.toLowerCase()) {
      isSub && setIsCorrect(true);
      onCorrect();
    } else {
      isSub && setIsCorrect(false);
      onWrong();
    }

    return () => {
      isSub = false;
    };
  }, [isCheck]);

  // reset when next or prev
  useEffect(() => {
    let isSub = true;
    if (resetFlag === -1) {
      return;
    }

    if (isSub) {
      setIsCheck(false);
      setIsCorrect(false);
      setUserSplit([]);
      originSplit.current = splitWord(word.toLowerCase());
    }

    return () => (isSub = false);
  }, [resetFlag]);

  // get word detail
  useEffect(() => {
    let isSub = true;

    if (modal.show && modal.loading) {
      (async function () {
        try {
          const apiRes = await wordApi.getWordDetails(word);
          if (apiRes.status === 200 && isSub) {
            setModal({ show: true, loading: false, data: { ...apiRes.data } });
          }
        } catch (error) {
          isSub && setModal({ show: false, loading: false, data: null });
        }
      })();
    }

    return () => (isSub = false);
  }, [modal]);

  // @rendering ...
  return (
    <div className={classes.root}>
      <div id={userSplitId} className={`${classes.split} flex-center`}>
        {renderUserSplit()}
      </div>

      <div>
        <div className="flex-center-between my-4">
          <Tooltip title="Xem đáp án">
            <HelpIcon
              className={`${classes.helpIcon} cur-pointer`}
              onClick={() =>
                setModal({ loading: true, data: null, show: true })
              }
            />
          </Tooltip>
          <p className={`${classes.mean} t-center px-4`}>{mean}</p>
          <Speaker className={classes.speaker} text={word} />
        </div>
        {isCheck && (
          <p
            className={`${classes.answer} t-center ${
              isCorrect ? 'right' : 'wrong'
            }`}>
            {isCorrect ? 'Chính xác' : 'Sai rồi'}
          </p>
        )}
      </div>

      <div className={`${classes.split} flex-center`}>
        {renderOriginSplit()}
      </div>

      {/* word detail modal */}
      {modal.show && (
        <WordDetailModal
          open={modal.show}
          loading={modal.loading}
          onClose={() => setModal({ loading: false, data: null, show: false })}
          {...modal.data}
        />
      )}
    </div>
  );
}

SplitWord.propTypes = {
  mean: PropTypes.string,
  onCorrect: PropTypes.func,
  onWrong: PropTypes.func,
  resetFlag: PropTypes.number,
  word: PropTypes.string,
};

SplitWord.defaultProps = {
  mean: '',
  word: '',
  onCorrect: function () {},
  onWrong: function () {},
  resetFlag: -1,
};

export default SplitWord;

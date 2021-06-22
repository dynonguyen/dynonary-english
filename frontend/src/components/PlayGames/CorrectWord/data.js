import GlobalLoading from 'components/UI/GlobalLoading';
import React, { useState } from 'react';
import CorrectWord from '.';
import WordPack from '../WordPack';

function CorrectWordData() {
  // 0 - choose word pack, 1 - get pack, 2 - done
  const [state, setState] = useState(0);

  const getWordPackage = async ({ type, topic, level, specialty }) => {
    console.log({ type, topic, level, specialty });
    setState(2);
  };

  return (
    <>
      {state === 0 ? (
        <WordPack onChoose={getWordPackage} />
      ) : state === 1 ? (
        <GlobalLoading title="Đang tải gói câu hỏi ..." />
      ) : (
        <CorrectWord />
      )}
    </>
  );
}

export default CorrectWordData;

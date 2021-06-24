import wordApi from 'apis/wordApi';
import React, { useEffect, useState } from 'react';
import Flashcard from '.';

function FlashcardData() {
  const [List, setList] = useState([]);

  useEffect(() => {
    async function getFlashcardList() {
      try {
        const apiRes = await wordApi.getWordPackByPage();
      } catch (error) {}
    }

    return () => {};
  }, []);

  return <Flashcard />;
}

export default FlashcardData;

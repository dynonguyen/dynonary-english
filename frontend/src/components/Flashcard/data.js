import commonApi from 'apis/commonApi';
import flashcardApi from 'apis/flashcardApi';
import React, { useEffect, useState } from 'react';
import Flashcard from '.';

const perPage = 7;

function FlashcardData() {
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [pageInfo, setPageInfo] = useState({
    page: 1,
    packInfo: {
      type: '-1',
      level: '-1',
      specialty: '-1',
      topics: [],
    },
  });

  // get total word pack
  useEffect(() => {
    let isSubscribe = true;

    (async function getTotalWordPack() {
      try {
        const apiRes = await commonApi.getWordPackTotal(pageInfo.packInfo);

        if (apiRes.status === 200 && isSubscribe) {
          const { total = 0 } = apiRes.data;
          setTotal(Math.ceil(total / perPage));
        }
      } catch (error) {}
    })();

    return () => (isSubscribe = false);
  }, []);

  // get word pack
  useEffect(() => {
    let isSubscribe = true;

    async function getFlashcardList() {
      try {
        const apiRes = await flashcardApi.getWordPack(
          pageInfo.page,
          perPage,
          pageInfo.packInfo,
        );

        if (apiRes.status === 200 && isSubscribe) {
          const { packList = [] } = apiRes.data;
          setList([...list, ...packList]);
        }
      } catch (error) {}
    }

    isSubscribe && getFlashcardList();

    return () => (isSubscribe = false);
  }, []);

  return <Flashcard list={list} wordPackTotal={total} />;
}

export default FlashcardData;

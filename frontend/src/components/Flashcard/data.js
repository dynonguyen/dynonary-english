import commonApi from 'apis/commonApi';
import flashcardApi from 'apis/flashcardApi';
import React, { useEffect, useRef, useState } from 'react';
import Flashcard from '.';

const perPage = 7;

function FlashcardData() {
  const list = useRef([]); // list store all item to prevent call API when prev button click
  const [currentList, setCurrentList] = useState([]);
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
    if (pageInfo.page < list.current.length / perPage) return; // prevent call API when element already exists in the old array

    async function getFlashcardList() {
      try {
        const apiRes = await flashcardApi.getWordPack(
          pageInfo.page,
          perPage,
          pageInfo.packInfo,
        );

        if (apiRes.status === 200 && isSubscribe) {
          const { packList = [] } = apiRes.data;
          setCurrentList(packList);
          list.current = [...list.current, ...packList];
        }
      } catch (error) {}
    }

    isSubscribe && getFlashcardList();

    return () => (isSubscribe = false);
  }, [pageInfo]);

  const handleNextClick = () => {
    const { page } = pageInfo;
    if (page < total) {
      if (pageInfo.page < list.current.length / perPage) {
        const oldList = list.current.slice(
          page * perPage,
          (page + 1) * perPage,
        );
        setCurrentList(oldList);
      }
      setPageInfo({ ...pageInfo, page: page + 1 });
    }
  };

  const handlePrevClick = () => {
    const { page } = pageInfo;
    if (page > 1) {
      const oldList = list.current.slice(
        (page - 2) * perPage,
        (page - 1) * perPage,
      );
      setCurrentList(oldList);
      setPageInfo({ ...pageInfo, page: page - 1 });
    }
  };

  return (
    <Flashcard
      list={currentList}
      wordPackTotal={total}
      currentPage={pageInfo.page}
      onNextPage={handleNextClick}
      onPrevPage={handlePrevClick}
    />
  );
}

export default FlashcardData;

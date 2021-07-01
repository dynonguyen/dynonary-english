import commonApi from 'apis/commonApi';
import wordApi from 'apis/wordApi';
import React, { useEffect, useRef, useState } from 'react';
import DynoDictionary from '.';

const perPage = 20;

function DynoDictionaryData() {
  const [page, setPage] = useState(1);
  const [packInfo, setPackInfo] = useState({
    type: '-1',
    level: '-1',
    specialty: '-1',
    topics: [],
  });
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const [more, setMore] = useState(true); // toggle infinite scrolling
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const totalPage = useRef(0);

  const nextPage = () => {
    if (page < totalPage.current) {
      setPage(page + 1);
    } else {
      setMore(false);
    }
  };

  // get total word pack
  useEffect(() => {
    let isSub = true;

    (async function () {
      try {
        const apiRes = await commonApi.getWordPackTotal(packInfo);
        if (apiRes.status === 200 && isSub) {
          const { total = 0 } = apiRes.data;
          totalPage.current = Math.ceil(total / perPage);
        }
      } catch (error) {}
    })();

    return () => (isSub = false);
  }, [packInfo]);

  // get word pack
  useEffect(() => {
    let isSub = true;

    (async function () {
      try {
        setLoading(true);
        const apiRes = await wordApi.getWordList(page, perPage, packInfo);
        if (apiRes.status === 200 && isSub) {
          const { packList = [] } = apiRes.data;
          setList([...list, ...packList]);
        }
      } catch (error) {
      } finally {
        if (isSub) {
          setLoading(false);
          isFirstLoad && setIsFirstLoad(false);
        }
      }
    })();

    return () => (isSub = false);
  }, [page]);

  return (
    <DynoDictionary
      list={list}
      loading={loading}
      onLoadData={nextPage}
      more={more}
      isFirstLoad={isFirstLoad}
    />
  );
}

export default DynoDictionaryData;

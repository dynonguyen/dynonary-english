import sentenceApi from 'apis/sentenceApi';
import React, { useEffect, useRef, useState } from 'react';
import CommunicationPhrase from '.';

const perPage = 20;

function CommunicationPhraseData() {
  const [page, setPage] = useState(1);
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

  // get total phrase
  useEffect(() => {
    let isSub = true;

    (async function () {
      try {
        const apiRes = await sentenceApi.getTotalSentences();

        if (apiRes.status === 200 && isSub) {
          const { total = 0 } = apiRes.data;
          totalPage.current = Math.ceil(total / perPage);
        }
      } catch (error) {}
    })();

    return () => (isSub = false);
  }, []);

  // get phrase list
  useEffect(() => {
    let isSub = true;

    (async function () {
      try {
        setLoading(true);
        const apiRes = await sentenceApi.getSentenceList(page, perPage);
        if (apiRes.status === 200 && isSub) {
          const { sentenceList = [] } = apiRes.data;
          setList([...list, ...sentenceList]);
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
    <CommunicationPhrase
      list={list}
      isFirstLoad={isFirstLoad}
      loading={loading}
      more={more}
      onLoadData={nextPage}
    />
  );
}

export default CommunicationPhraseData;

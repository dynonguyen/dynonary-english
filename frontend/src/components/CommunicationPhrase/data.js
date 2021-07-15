import sentenceApi from 'apis/sentenceApi';
import { equalArray } from 'helper';
import React, { useEffect, useRef, useState } from 'react';
import CommunicationPhrase from '.';

const perPage = 20;

function CommunicationPhraseData() {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const [more, setMore] = useState(true); // toggle infinite scrolling
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [topicList, setTopicList] = useState([]);
  const totalPage = useRef(0);

  const nextPage = () => {
    if (page < totalPage.current) {
      setPage(page + 1);
    } else {
      setMore(false);
    }
  };

  const onSelectTopic = (topics) => {
    if (!topics || !Array.isArray(topics) || equalArray(topics, topicList)) {
      return;
    }

    setPage(1);
    setMore(true);
    setList([]);
    setTopicList([...topics]);
    totalPage.current = 0;
  };

  // get total sentence
  useEffect(() => {
    let isSub = true;

    (async function () {
      try {
        const apiRes = await sentenceApi.getTotalSentences(topicList);

        if (apiRes.status === 200 && isSub) {
          const { total = 0 } = apiRes.data;
          totalPage.current = Math.ceil(total / perPage);
        }
      } catch (error) {}
    })();

    return () => (isSub = false);
  }, [topicList]);

  // get sentence list
  useEffect(() => {
    let isSub = true;

    (async function () {
      try {
        setLoading(true);
        const apiRes = await sentenceApi.getSentenceList(
          page,
          perPage,
          topicList,
        );
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
  }, [page, topicList]);

  return (
    <CommunicationPhrase
      list={list}
      isFirstLoad={isFirstLoad}
      loading={loading}
      more={more}
      onLoadData={nextPage}
      onSelectTopic={(v) => onSelectTopic(v)}
    />
  );
}

export default CommunicationPhraseData;

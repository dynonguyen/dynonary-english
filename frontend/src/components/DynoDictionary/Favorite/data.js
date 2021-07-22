import wordApi from 'apis/wordApi';
import WordDetailModal from 'components/UI/WordDetailModal';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import FavoriteDictionary from '.';

const perPage = 20;

function FavoriteDictionaryData() {
  const [page, setPage] = useState(1);
  const [sortType, setSortType] = useState('rand');
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const [more, setMore] = useState(true); // toggle infinite scrolling
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const { favoriteList } = useSelector((state) => state.userInfo);
  const totalPage = favoriteList.length;
  const preSearchList = useRef([]);

  const nextPage = () => {
    if (page < totalPage) {
      setPage(page + 1);
    } else {
      setMore(false);
    }
  };

  const onSortTypeChange = (type = 'rand') => {
    if (type === sortType) return;
    preSearchList.current = [];
    setSortType(type);
    setPage(1);
    setList([]);
  };

  const onSearchWord = async (word) => {
    try {
      if (word === '') {
        setList(preSearchList.current);
        setMore(true);
        return;
      }

      const apiRes = await wordApi.getSearchWord(word);
      if (apiRes.status === 200) {
        const { packList = [] } = apiRes.data;
        setList(packList);
        setMore(false);
      }
    } catch (error) {}
  };

  // get favorite list
  useEffect(() => {
    let isSub = true;

    (async function () {
      try {
        setLoading(true);
        const apiRes = await wordApi.getUserFavoriteList(
          page,
          perPage,
          sortType,
        );
        if (apiRes.status === 200 && isSub) {
          const { packList = [] } = apiRes.data;
          const newList = [...list, ...packList];
          preSearchList.current = newList;
          setList(newList);
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
  }, [page, sortType]);

  return (
    <>
      <FavoriteDictionary
        list={list}
        loading={loading}
        onLoadData={nextPage}
        more={more}
        isFirstLoad={isFirstLoad}
        onSortTypeChange={onSortTypeChange}
        onSearchWord={onSearchWord}
      />
      <WordDetailModal />
    </>
  );
}

export default FavoriteDictionaryData;

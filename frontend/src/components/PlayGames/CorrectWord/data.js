import gameApi from 'apis/gameApi';
import GlobalLoading from 'components/UI/GlobalLoading';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setMessage } from 'redux/slices/message.slice';
import CorrectWord from '.';
import WordPack from '../WordPack';

function CorrectWordData() {
  // 0 - choose word pack, 1 - get pack, 2 - done
  const [state, setState] = useState(0);
  const [wordPack, setWordPack] = useState([]);
  const dispatch = useDispatch();

  const getWordPackage = async ({ type, topic, level, specialty }) => {
    try {
      setState(1);
      const apiRes = await gameApi.getWordPackCWG({
        type,
        topic,
        level,
        specialty,
      });
      if (apiRes.status === 200) {
        const { wordPack = [] } = apiRes.data;
        if (wordPack.length === 0) {
          dispatch(
            setMessage({
              type: 'warning',
              message:
                'Rất xin lỗi, gói từ vựng hiện tại không đủ. Vui lòng thử lại sao',
            }),
          );
          setState(0);
          return;
        }

        setWordPack(wordPack);
        setState(2);
        return;
      }

      dispatch(
        setMessage({
          type: 'warning',
          message: 'Lấy gói từ vựng thất bại, thử lại !',
        }),
      );
      setState(0);
    } catch (error) {
      const message =
        error.response?.data?.message || 'Lấy gói từ vựng thất bại, thử lại !';
      dispatch(setMessage({ type: 'error', message }));
      setState(0);
    }
  };

  return (
    <>
      {state === 0 ? (
        <WordPack open={true} onChoose={getWordPackage} />
      ) : state === 1 ? (
        <GlobalLoading title="Đang tải gói câu hỏi ..." />
      ) : (
        <CorrectWord list={wordPack} />
      )}
    </>
  );
}

export default CorrectWordData;

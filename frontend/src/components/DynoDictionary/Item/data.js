import wordApi from 'apis/wordApi';
import WordDetailModal from 'components/UI/WordDetailModal';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setMessage } from 'redux/slices/message.slice';
import DynoDictionaryItem from '.';

function DynoDictionaryItemData(props) {
  const [modal, setModal] = useState({ loading: false, open: false });
  const dispatch = useDispatch();

  const onShowDetail = async (word) => {
    try {
      setModal({ open: true, loading: true });
      const apiRes = await wordApi.getWordDetails(word);
      if (apiRes.status === 200) {
        setModal({ open: true, loading: false, ...apiRes.data });
      }
    } catch (error) {
      setModal({ open: false, loading: false });
      dispatch(
        setMessage({
          type: 'error',
          message: 'Không thể lấy thông tin, thử lại.',
        }),
      );
    }
  };

  return (
    <>
      <DynoDictionaryItem {...props} onShowDetail={onShowDetail} />

      {modal.open && (
        <WordDetailModal
          {...modal}
          onClose={() => setModal({ open: false, loading: false })}
        />
      )}
    </>
  );
}

export default DynoDictionaryItemData;

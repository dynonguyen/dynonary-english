import Tooltip from '@material-ui/core/Tooltip';
import CollectionsIcon from '@material-ui/icons/Collections';
import SettingsIcon from '@material-ui/icons/Settings';
import CarouselIcon from '@material-ui/icons/ViewCarousel';
import WordPack from 'components/UI/WordPack';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CardItem from './CardItem';
import GalleryList from './GalleryList';
import useStyle from './style';

function Flashcard({
  list,
  wordPackTotal,
  currentPage,
  onNextPage,
  onPrevPage,
  onWordPackChange,
}) {
  const classes = useStyle();
  const [mode, setMode] = useState(1); // 0 - gallery, 1 - slide show
  const [openWordPack, setOpenWordPack] = useState(false);

  return (
    <div className="container my-10">
      <div className="flex-center-between">
        <h1 className="dyno-title">Flashcard Gallery</h1>
        <div className={classes.iconWrap}>
          <Tooltip title="Chế độ bộ sưu tập" placement="bottom">
            <CollectionsIcon
              onClick={() => setMode(0)}
              className={`${classes.icon} ${mode === 0 ? 'active' : ''}`}
            />
          </Tooltip>

          <Tooltip title="Chế độ slide show" placement="bottom">
            <CarouselIcon
              onClick={() => setMode(1)}
              className={`${classes.icon} ${mode === 1 ? 'active' : ''}`}
            />
          </Tooltip>

          <Tooltip title="Cài đặt gói từ vựng" placement="bottom">
            <SettingsIcon
              className={classes.icon}
              onClick={() => setOpenWordPack(true)}
            />
          </Tooltip>
        </div>
      </div>
      <div className="dyno-break" />

      {openWordPack && (
        <WordPack
          open={true}
          topicMultiples={true}
          onCancel={() => setOpenWordPack(false)}
          cancelBtnText="Đóng"
          onChoose={(packInfo) => {
            onWordPackChange(packInfo);
            setOpenWordPack(false);
          }}
        />
      )}

      {mode === 0 ? (
        <GalleryList
          list={list}
          onPrev={onPrevPage}
          onNext={onNextPage}
          total={wordPackTotal}
          current={currentPage}
        />
      ) : (
        <>
          <CardItem />
        </>
      )}
    </div>
  );
}

Flashcard.propTypes = {
  list: PropTypes.array,
  wordPackTotal: PropTypes.number,
  currentPage: PropTypes.number,
  onNextPage: PropTypes.func,
  onPrevPage: PropTypes.func,
  onWordPackChange: PropTypes.func,
};

Flashcard.defaultProps = {
  list: [],
  wordPackTotal: 0,
  currentPage: 0,
};

export default Flashcard;

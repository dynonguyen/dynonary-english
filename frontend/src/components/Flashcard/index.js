import Tooltip from '@material-ui/core/Tooltip';
import CollectionsIcon from '@material-ui/icons/Collections';
import SettingsIcon from '@material-ui/icons/Settings';
import CarouselIcon from '@material-ui/icons/ViewCarousel';
import WordPack from 'components/UI/WordPack';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import GalleryList from './GalleryList';
import useStyle from './style';

function Flashcard({ list, wordPackTotal }) {
  const classes = useStyle();
  const [mode, setMode] = useState(0); // 0 - gallery, 1 - slide show
  const [openWordPack, setOpenWordPack] = useState(false);
  const [galleryPage, setGalleryPage] = useState(1);

  const onChangeWordPack = (packInfo) => {
    console.log(packInfo);
  };

  const handleGalleryPrev = () => {};

  const handleGalleryNext = () => {};

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

      <WordPack
        open={openWordPack}
        topicMultiples={true}
        onCancel={() => setOpenWordPack(false)}
        cancelBtnText="Đóng"
        onChoose={onChangeWordPack}
      />

      {mode === 0 ? (
        <GalleryList
          list={list}
          onPrev={handleGalleryPrev}
          onNext={handleGalleryNext}
          total={wordPackTotal}
          current={galleryPage}
        />
      ) : (
        <>Slide carousel</>
      )}
    </div>
  );
}

Flashcard.propTypes = {
  list: PropTypes.array,
  wordPackTotal: PropTypes.number,
};

Flashcard.defaultProps = {
  list: [],
  wordPackTotal: 0,
};

export default Flashcard;

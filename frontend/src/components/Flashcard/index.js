import Tooltip from '@material-ui/core/Tooltip';
import CollectionsIcon from '@material-ui/icons/Collections';
import SettingsIcon from '@material-ui/icons/Settings';
import CarouselIcon from '@material-ui/icons/ViewCarousel';
import WordPack from 'components/UI/WordPack';
import React, { useState } from 'react';
import GalleryList from './GalleryList';
import useStyle from './style';

// @fake data
const list = (function () {
  let res = [];
  for (let i = 0; i < 7; ++i) {
    res.push({
      word: 'word',
      mean: 'mean',
      phonetic: 'phonetic',
      type: 'n',
      picture:
        'data:image/jpeg;base64,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',
    });
  }
  return res;
})();
const galleryPageTotal = 10;

function Flashcard() {
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
        topicMultiples={false}
        onCancel={() => setOpenWordPack(false)}
        cancelBtnText="Đóng"
        onChoose={onChangeWordPack}
      />

      {mode === 0 ? (
        <GalleryList
          list={list}
          onPrev={handleGalleryPrev}
          onNext={handleGalleryNext}
          total={galleryPageTotal}
          current={galleryPage}
        />
      ) : (
        <>Slide carousel</>
      )}
    </div>
  );
}

export default Flashcard;

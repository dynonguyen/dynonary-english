import Grid from '@material-ui/core/Grid';
import communicateIcon from 'assets/icons/communicate.png';
import dictionaryIcon from 'assets/icons/dictionary.png';
import editIcon from 'assets/icons/edit.png';
import favoriteIcon from 'assets/icons/favorite.png';
import flashcardIcon from 'assets/icons/flashcard.png';
import gameIcon from 'assets/icons/game.png';
import grammarIcon from 'assets/icons/grammar.png';
import toeicIcon from 'assets/icons/toeic.png';
import ipaIcon from 'assets/icons/ipa.png';
import donateIcon from 'assets/icons/donate.png';
import verbIcon from 'assets/icons/verb.png';
import translateIcon from 'assets/icons/translate.png';
import FeatureBox from 'components/FeatureBox';
import Navigation from 'components/Navigation';
import SpeedDials from 'components/UI/SpeedDial';
import React from 'react';

const FEATURE_LIST = [
  {
    title: 'Bảng phiên âm (IPA)',
    subTitle:
      'Luyện nghe, phát âm chuẩn với 44 âm trong bảng phiên âm quốc tế IPA',
    imgUrl: ipaIcon,
    to: '/IPA',
  },
  {
    title: 'Dịch văn bản',
    subTitle:
      'Dịch từ, văn bản (Việt-Anh và Anh-Việt) dễ dàng như với Google Translate',
    imgUrl: translateIcon,
    to: '/',
  },
  {
    title: '1000+ câu giao tiếp',
    subTitle: 'Luyện nghe, nói câu tiếng Anh giao tiếp hàng ngày cùng Dyno',
    imgUrl: communicateIcon,
    to: '/',
  },
  {
    title: 'Từ vựng với Flashcard',
    subTitle:
      'Flashcard phương pháp học từ vựng nổi tiếng. Nay hoàn toàn miễn phí trên Dynonary',
    imgUrl: flashcardIcon,
    to: '/',
  },
  {
    title: 'Từ điển trong Dynonary',
    subTitle: 'Danh sách từ vựng được phân loại theo cấp độ, loại từ, ...',
    imgUrl: dictionaryIcon,
    to: '/',
  },
  {
    title: 'Từ vựng TOEIC',
    subTitle: 'Các từ vựng thường gắp trong đề thi Toeic',
    imgUrl: toeicIcon,
    to: '/',
  },
  {
    title: 'Từ vựng yêu thích của bạn',
    imgUrl: favoriteIcon,
    subTitle: 'Danh sách những từ vựng yêu thích mà bạn đã lưu',
    to: '/',
  },
  {
    title: 'Cấu trúc câu',
    imgUrl: grammarIcon,
    subTitle: 'Danh sách những cấu trúc câu trong tiếng Anh',
    to: '/',
  },
  {
    title: 'Động từ bất quy tắc',
    imgUrl: verbIcon,
    subTitle: 'Tất cả những động từ bất quy tắc trong tiếng Anh',
    to: '/',
  },
  {
    title: 'Play game',
    imgUrl: gameIcon,
    subTitle: 'Chơi game cùng Dyno để ôn tập lại tất cả kiến thức đã học nhé',
    to: '/',
  },
  {
    title: 'Đóng góp',
    imgUrl: editIcon,
    subTitle:
      'Dyno rất mong được sự đóng góp của bạn. Bạn có thể thêm từ mới, sửa lỗi sai',
    to: '/',
  },
  {
    title: 'Donate',
    imgUrl: donateIcon,
    subTitle:
      'Ủng hộ cho Dyno để ứng dụng được duy trì, cải thiện và thêm nhiều tính năng hơn. Cảm ơn bạn ❤',
    to: '/',
  },
];

function HomePage() {
  return (
    <>
      <Navigation />
      <div className="container my-10">
        <Grid container spacing={3}>
          {FEATURE_LIST.map((box, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <FeatureBox
                imgUrl={box.imgUrl}
                title={box.title}
                to={box.to}
                subTitle={box.subTitle}
              />
            </Grid>
          ))}
        </Grid>
      </div>
      <SpeedDials />
    </>
  );
}

export default HomePage;

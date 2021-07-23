import academyIcon from 'assets/icons/topics/academy.png';
import animalIcon from 'assets/icons/topics/animal.png';
import bodyIcon from 'assets/icons/topics/body.png';
import colorIcon from 'assets/icons/topics/color.png';
import cultureIcon from 'assets/icons/topics/culture.png';
import entertainmentIcon from 'assets/icons/topics/entertainment.png';
import excitingIcon from 'assets/icons/topics/exciting.png';
import flagIcon from 'assets/icons/topics/flag.png';
import foodIcon from 'assets/icons/topics/food.png';
import healthIcon from 'assets/icons/topics/health.png';
import hobbyIcon from 'assets/icons/topics/hobby.png';
import jobIcon from 'assets/icons/topics/job.png';
import othersIcon from 'assets/icons/topics/others.png';
import skillIcon from 'assets/icons/topics/skill.png';
import socialIcon from 'assets/icons/topics/social.png';
import spiritualityIcon from 'assets/icons/topics/spirituality.png';
import sportIcon from 'assets/icons/topics/sport.png';
import technologyIcon from 'assets/icons/topics/technology.png';
import travelIcon from 'assets/icons/topics/travel.png';
import treeIcon from 'assets/icons/topics/tree.png';
import toeicIcon from 'assets/icons/topics/toeic.png';
import ieltsIcon from 'assets/icons/topics/ielts.png';
import natureIcon from 'assets/icons/topics/nature.png';
import familyIcon from 'assets/icons/topics/family.png';
import clothesIcon from 'assets/icons/topics/clothes.png';

export const TOEIC_KEY = '20';

export const TOPICS = [
  {
    key: '0',
    title: 'Thực vật',
    icon: treeIcon,
  },
  {
    key: '1',
    title: 'Đời sống',
    icon: socialIcon,
  },
  {
    key: '2',
    title: 'Sức khoẻ',
    icon: healthIcon,
  },
  {
    key: '3',
    title: 'Ẩm thực',
    icon: foodIcon,
  },
  {
    key: '4',
    title: 'Sự vật',
    icon: cultureIcon,
  },
  {
    key: '6',
    title: 'Động vật',
    icon: animalIcon,
  },
  {
    key: '7',
    title: 'Kỹ năng',
    icon: skillIcon,
  },
  {
    key: '9',
    title: 'Công nghệ',
    icon: technologyIcon,
  },
  {
    key: '10',
    title: 'Con người',
    icon: bodyIcon,
  },
  {
    key: '11',
    title: 'Công việc',
    icon: jobIcon,
  },
  {
    key: '12',
    title: 'Giải trí',
    icon: entertainmentIcon,
  },
  {
    key: '13',
    title: 'Sở thích',
    icon: hobbyIcon,
  },
  {
    key: '14',
    title: 'Thể thao',
    icon: sportIcon,
  },
  {
    key: '15',
    title: 'Du lịch',
    icon: travelIcon,
  },
  {
    key: '16',
    title: 'Quốc gia',
    icon: flagIcon,
  },
  {
    key: '17',
    title: 'Màu sắc',
    icon: colorIcon,
  },
  {
    key: '18',
    title: 'Tín ngưỡng',
    icon: spiritualityIcon,
  },
  {
    key: '19',
    title: 'Thú vị',
    icon: excitingIcon,
  },
  {
    key: TOEIC_KEY,
    title: 'TOEIC',
    icon: toeicIcon,
  },
  {
    key: '21',
    title: 'IELTS',
    icon: ieltsIcon,
  },
  {
    key: '23',
    title: 'Thiên nhiên',
    icon: natureIcon,
  },
  {
    key: '24',
    title: 'Mối quan hệ',
    icon: familyIcon,
  },
  {
    key: '25',
    title: 'Trang phục',
    icon: clothesIcon,
  },
  {
    key: '26',
    title: 'Giáo dục',
    icon: academyIcon,
  },
  {
    key: '22',
    title: 'Khác',
    icon: othersIcon,
  },
];

export const TOPIC_OPTIONS = TOPICS.map((topic) => ({
  value: topic.key,
  label: topic.title,
}));

import AutoSearchInput from 'components/UI/AutoSearchInput';
import WordSortModal from 'components/UI/WordSortModal';
import React from 'react';
import DynoDictionaryItem from './Item';
import SettingWordPack from './SettingWordPack';
import useStyle from './style';

function DynoDictionary() {
  const classes = useStyle();

  return (
    <div className={`${classes.root} dyno-container`}>
      {/* title - menu */}
      <div className="flex-center-between">
        <h1 className="dyno-title">Từ điển Dynonary</h1>
        <div>
          <WordSortModal
            onSelect={(v) => console.log(v)}
            classNameIcon={`${classes.icon} mr-5`}
          />
          <SettingWordPack
            onChoose={(v) => console.log(v)}
            classNameIcon={classes.icon}
          />
        </div>
      </div>
      <div className="dyno-break"></div>
      {/* list content */}
      <div className={classes.contentWrap}>
        <AutoSearchInput />

        <ul className={`${classes.list} flex-col w-100`}>
          <li className={classes.listItem}>
            <DynoDictionaryItem />
          </li>
          <li className={classes.listItem}>
            <DynoDictionaryItem />
          </li>
          <li className={classes.listItem}>
            <DynoDictionaryItem />
          </li>
          <li className={classes.listItem}>
            <DynoDictionaryItem />
          </li>
          <li className={classes.listItem}>
            <DynoDictionaryItem />
          </li>
          <li className={classes.listItem}>
            <DynoDictionaryItem />
          </li>
          <li className={classes.listItem}>
            <DynoDictionaryItem />
          </li>
          <li className={classes.listItem}>
            <DynoDictionaryItem />
          </li>
          <li className={classes.listItem}>
            <DynoDictionaryItem />
          </li>
          <li className={classes.listItem}>
            <DynoDictionaryItem />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DynoDictionary;

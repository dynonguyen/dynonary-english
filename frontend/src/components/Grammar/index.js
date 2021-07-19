import AutoSearchInput from 'components/UI/AutoSearchInput';
import React from 'react';
import GrammarListBox from './ListBox';
import useStyle from './style';

function Grammar(props) {
  const classes = useStyle();

  const onSearch = (v) => {
    console.log(v);
  };

  return (
    <div className={classes.wrapper}>
      <div className="container">
        <div className={classes.root}>
          <h1 className="dyno-title">Học ngữ pháp cùng Dyno</h1>
          <div className="dyno-break"></div>
          <AutoSearchInput placeholder="Nhập từ khoá ..." onSearch={onSearch} />
          <GrammarListBox />
        </div>
      </div>
    </div>
  );
}

export default Grammar;

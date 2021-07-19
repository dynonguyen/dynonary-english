import PropTypes from 'prop-types';
import AutoSearchInput from 'components/UI/AutoSearchInput';
import React from 'react';
import GrammarListBoxData from './ListBox/data';
import useStyle from './style';

function Grammar({ list, loading }) {
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

          <AutoSearchInput
            disabled={loading}
            placeholder="Nhập từ khoá ..."
            onSearch={onSearch}
          />

          {loading
            ? Array(5)
                .fill(0)
                .map((item, index) => (
                  <div className={classes.listBox} key={index}>
                    <GrammarListBoxData number={index + 1} loading={true} />
                  </div>
                ))
            : list.map((item, index) => (
                <div className={classes.listBox} key={index}>
                  <GrammarListBoxData
                    number={index + 1}
                    loading={false}
                    {...item}
                  />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

Grammar.propTypes = {
  list: PropTypes.array,
  loading: PropTypes.bool,
};

Grammar.defaultProps = {
  list: [],
  loading: true,
};

export default Grammar;

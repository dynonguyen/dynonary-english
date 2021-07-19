import AutoSearchInput from 'components/UI/AutoSearchInput';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import GrammarListBoxData from './ListBox/data';
import useStyle from './style';

function Grammar({ list, loading }) {
  const classes = useStyle();
  const [blogList, setBlogList] = useState(list || []);
  const preSearchList = useRef(list || []);

  const onSearch = (keyword) => {
    if (keyword === '' && blogList.length !== preSearchList.current.length) {
      setBlogList([...preSearchList.current]);
    } else {
      const newList = preSearchList.current?.filter((blog) => {
        const str = `${blog.title} ${blog.desc}`.toLowerCase();
        return str.indexOf(keyword.toLowerCase()) !== -1;
      });
      setBlogList([...newList]);
    }
  };

  useEffect(() => {
    let isSub = true;

    if (list && list.length > 0 && isSub) {
      setBlogList([...list]);
      preSearchList.current = [...list];
    }

    return () => (isSub = false);
  }, [list]);

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

          {loading ? (
            Array(5)
              .fill(0)
              .map((item, index) => (
                <div className={classes.listBox} key={index}>
                  <GrammarListBoxData number={index + 1} loading={true} />
                </div>
              ))
          ) : blogList.length > 0 ? (
            blogList.map((item, index) => (
              <div className={classes.listBox} key={index}>
                <GrammarListBoxData
                  number={index + 1}
                  loading={false}
                  {...item}
                />
              </div>
            ))
          ) : (
            <h3
              className="t-center"
              style={{ fontSize: '1.8rem', color: 'var(--label-color)' }}>
              Không tìm thấy bài viết nào cả 😢
            </h3>
          )}
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

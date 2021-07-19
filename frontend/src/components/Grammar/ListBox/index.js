import Collapse from '@material-ui/core/Collapse';
import ArrowUpIcon from '@material-ui/icons/ExpandLess';
import Skeleton from '@material-ui/lab/Skeleton';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import useStyle from './style';

function GrammarListBox({
  number,
  title,
  desc,
  loading,
  _id,
  onLoadBlog,
  blogHtml,
}) {
  const classes = useStyle();
  const [showBlog, setShowBlog] = useState(false);

  const onToggleBlog = () => {
    // If blog not exist -> get blog, else toggle blog
    if (!Boolean(blogHtml)) {
      onLoadBlog(_id);
      setShowBlog(true);
    } else {
      setShowBlog(!showBlog);
    }
  };

  useEffect(() => {
    if (!blogHtml) return;
    const elem = document.getElementById(_id);
    if (elem) {
      elem.setAttribute('srcdoc', blogHtml);
    }
  }, [blogHtml]);

  return (
    <div className={loading ? 'disabled' : ''}>
      <div
        className={`${classes.root} d-flex cur-pointer ${
          showBlog ? 'active' : ''
        }`}
        onClick={onToggleBlog}>
        <div
          className={`${classes.number} ${
            showBlog ? 'active' : ''
          } flex-center`}>
          {number}
        </div>

        {loading ? (
          <div
            className="flex-center w-100"
            style={{ minHeight: '8rem', padding: '12px' }}>
            <Skeleton animation="wave" className="w-100 h-100" />
          </div>
        ) : (
          <div className={classes.content}>
            <div className={classes.title}>{title}</div>
            <div className={classes.desc}>{desc}</div>
          </div>
        )}
      </div>

      <Collapse in={showBlog}>
        <div className="w-100 h-100 position-rel">
          <iframe className={classes.iframe} id={_id}></iframe>

          <ArrowUpIcon className={classes.arrowIcon} onClick={onToggleBlog} />
        </div>
      </Collapse>
    </div>
  );
}

GrammarListBox.propTypes = {
  _id: PropTypes.string,
  blogHtml: PropTypes.string,
  desc: PropTypes.string,
  loading: PropTypes.bool,
  number: PropTypes.number,
  onLoadBlog: PropTypes.func,
  title: PropTypes.string,
};

GrammarListBox.defaultProps = {
  _id: '',
  blogHtml: '',
  desc: 'description',
  number: 0,
  loading: true,
  title: 'title',
  onLoadBlog: function () {},
};

export default GrammarListBox;

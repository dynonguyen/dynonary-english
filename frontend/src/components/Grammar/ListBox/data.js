import blogApi from 'apis/blogApi';
import React, { useState } from 'react';
import GrammarListBox from '.';

function GrammarListBoxData(props) {
  const [blogHtml, setBlogHtml] = useState(null);

  const onLoadBlog = async (_id) => {
    try {
      if (!Boolean(_id)) {
        return;
      }
      const apiRes = await blogApi.getBlogHtml(_id);
      if (apiRes.status === 200) {
        setBlogHtml(apiRes.data?.blogHtml);
      }
    } catch (error) {}
  };

  return (
    <GrammarListBox {...props} blogHtml={blogHtml} onLoadBlog={onLoadBlog} />
  );
}

export default GrammarListBoxData;

import GrammarData from 'components/Grammar/data';
import useTitle from 'hooks/useTitle';
import React from 'react';

function GrammarPage(props) {
  useTitle('Ngữ pháp, cấu trúc câu');

  return <GrammarData />;
}

export default GrammarPage;

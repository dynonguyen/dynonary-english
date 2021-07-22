import GrammarData from 'components/Grammar/data';
import useTitle from 'hooks/useTitle';
import React from 'react';

function GrammarPage() {
  useTitle('Ngữ pháp, cấu trúc câu');

  return <GrammarData />;
}

export default GrammarPage;

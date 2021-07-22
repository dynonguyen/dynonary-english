import IrregularVerb from 'components/IrregularVerb';
import useTitle from 'hooks/useTitle';
import React from 'react';

function IrregularVerbPage() {
  useTitle('Động từ bất quy tắc');

  return <IrregularVerb />;
}

export default IrregularVerbPage;

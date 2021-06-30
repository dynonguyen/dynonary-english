import DynoDictionaryData from 'components/DynoDictionary/data';
import useCloseNavigation from 'hooks/useCloseNavigation';
import useTitle from 'hooks/useTitle';
import React from 'react';

function DynoDictionaryPage() {
  useTitle('Từ điển');
  useCloseNavigation();

  return (
    <div className="container">
      <DynoDictionaryData />
    </div>
  );
}

export default DynoDictionaryPage;

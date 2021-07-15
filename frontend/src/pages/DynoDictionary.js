import DynoDictionaryData from 'components/DynoDictionary/data';
import useCloseNavigation from 'hooks/useCloseNavigation';
import useTitle from 'hooks/useTitle';
import PropTypes from 'prop-types';
import React from 'react';

function DynoDictionaryPage({ isTOEIC }) {
  useTitle(isTOEIC ? 'Từ vựng TOEIC' : 'Từ điển');
  useCloseNavigation();

  return (
    <div className="container">
      <DynoDictionaryData isTOEIC={isTOEIC} />
    </div>
  );
}

DynoDictionaryPage.propTypes = {
  isTOEIC: PropTypes.bool,
};

DynoDictionaryPage.defaultProps = {
  isTOEIC: false,
};

export default DynoDictionaryPage;

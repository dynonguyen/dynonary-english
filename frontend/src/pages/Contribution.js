import ContributionData from 'components/Contribution/data';
import Navigation from 'components/Navigation';
import useTitle from 'hooks/useTitle';
import React from 'react';

function ContributionPage() {
  useTitle('Đóng góp');

  return <ContributionData />;
}

export default ContributionPage;

import Contribution from 'components/Contribution';
import Navigation from 'components/Navigation';
import useTitle from 'hooks/useTitle';
import React from 'react';

function ContributionPage() {
  useTitle('Đóng góp');

  return <Contribution />;
}

export default ContributionPage;

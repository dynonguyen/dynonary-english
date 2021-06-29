import Contribution from 'components/Contribution';
import useScrollTop from 'hooks/useScrollTop';
import useTitle from 'hooks/useTitle';
import React from 'react';

function ContributionPage() {
  useTitle('Đóng góp');
  useScrollTop();

  return <Contribution />;
}

export default ContributionPage;

import CommunicationPhrase from 'components/CommunicationPhrase';
import useTitle from 'hooks/useTitle';
import React from 'react';

function CommunicationPhrasePage() {
  useTitle('1000+ Cụm từ giao tiếp');

  return (
    <div className="container">
      <CommunicationPhrase />
    </div>
  );
}

export default CommunicationPhrasePage;

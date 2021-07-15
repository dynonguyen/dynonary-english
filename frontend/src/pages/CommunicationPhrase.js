import CommunicationPhraseData from 'components/CommunicationPhrase/data';
import useTitle from 'hooks/useTitle';
import React from 'react';

function CommunicationPhrasePage() {
  useTitle('1000+ Cụm từ giao tiếp');

  return (
    <div className="container">
      <CommunicationPhraseData />
    </div>
  );
}

export default CommunicationPhrasePage;

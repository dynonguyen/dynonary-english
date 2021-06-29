import React, { useState } from 'react';
import SentenceContribution from './index';

function SentenceContributionData() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (formData) => {
    console.log(formData);
  };

  return (
    <SentenceContribution submitting={submitting} onSubmitForm={handleSubmit} />
  );
}

export default SentenceContributionData;

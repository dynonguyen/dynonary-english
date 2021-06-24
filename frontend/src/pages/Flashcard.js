import FlashcardData from 'components/Flashcard/data';
import useTitle from 'hooks/useTitle';
import React from 'react';

function FlashcardPage() {
  useTitle('Flashcard');

  return <FlashcardData />;
}

export default FlashcardPage;

import Flashcard from 'components/Flashcard';
import useTitle from 'hooks/useTitle';
import React from 'react';

function FlashcardPage() {
  useTitle('Flashcard');

  return <Flashcard />;
}

export default FlashcardPage;

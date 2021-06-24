import WordPack from 'components/UI/WordPack';
import React from 'react';

function FlashcardItem() {
  return (
    <div>
      Hello flashcard
      <WordPack open={true} onChoose={(v) => console.log(v)} />
    </div>
  );
}

export default FlashcardItem;

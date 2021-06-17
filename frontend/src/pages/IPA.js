import Navigation from 'components/Navigation';
import React from 'react';
import Vowels from 'components/IPA/Vowels';
import Diphthongs from 'components/IPA/Diphthongs';
import Consonants from 'components/IPA/Consonants';

function IPAPage() {
  return (
    <div>
      <Navigation />
      <div className="container dyno-box">
        <Vowels />
        <Diphthongs />
        <Consonants />
      </div>
    </div>
  );
}

export default IPAPage;

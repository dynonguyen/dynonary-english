import Navigation from 'components/Navigation';
import React from 'react';
import Vowels from 'components/IPA/Vowels';
import Diphthongs from 'components/IPA/Diphthongs';

function IPAPage() {
  return (
    <div>
      <Navigation />
      <div className="container dyno-box">
        <Vowels />
        <Diphthongs />
        {/* consonants */}
        <h1 className="dyno-title">3. Phụ âm (Consonants)</h1>
        <h3 className="dyno-sub-title">
          Chúng ta có 24 nguyên âm đôi, chia làm 8 nhóm:
        </h3>
      </div>
    </div>
  );
}

export default IPAPage;

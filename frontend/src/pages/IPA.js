import Navigation from 'components/Navigation';
import React from 'react';
import Vowels from 'components/IPA/Vowels';

function IPAPage() {
  return (
    <div>
      <Navigation />
      <div className="container dyno-box">
        {/* vowels */}
        <Vowels />

        {/* diphthongs */}
        <h1 className="dyno-title">2. Nguyên âm đôi (Diphthongs)</h1>
        <h3 className="dyno-sub-title">
          Chúng ta có 8 nguyên âm đôi, mình chia làm 3 nhóm:
        </h3>

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

import ipaChartSrc from 'assets/images/ipa/ipa-chart.png';
import ipaTableSrc from 'assets/images/ipa/ipa-table.jpg';
import mouthShapeSrc from 'assets/images/ipa/mouth-shape.png';
import Consonants from 'components/IPA/Consonants';
import Diphthongs from 'components/IPA/Diphthongs';
import Vowels from 'components/IPA/Vowels';
import Navigation from 'components/Navigation';
import React from 'react';

function IPAPage() {
  return (
    <div>
      <Navigation />
      <div className="container dyno-box">
        <Vowels />
        <Diphthongs />
        <Consonants />

        {/* ipa chart */}
        <h1 className="dyno-title">4. Biểu đồ IPA (IPA Chart)</h1>
        <div
          className="w-100 my-10 t-center"
          style={{ maxWidth: 450, margin: 'auto' }}>
          <img src={ipaChartSrc} alt="IPA Chart" className="w-100 mb-4" />
          <a
            className="dyno-link"
            href="https://en.wikipedia.org/wiki/International_Phonetic_Alphabet"
            target="_blank"
            without
            rel="noreferrer">
            Nguồn: Wikipedia
          </a>
        </div>

        {/* summary */}
        <h1 className="dyno-title">5. Tóm lượt (Summary)</h1>

        <img src={ipaTableSrc} alt="IPA Table" className="w-100 mb-4" />
        <div
          className="w-100 my-10 t-center"
          style={{ maxWidth: 450, margin: 'auto' }}>
          <img src={mouthShapeSrc} alt="Mouth shape" className="w-100 mb-4" />
          <a
            className="dyno-link"
            href="https://google.com"
            target="_blank"
            without
            rel="noreferrer">
            Nguồn: Internet
          </a>
        </div>
      </div>
    </div>
  );
}

export default IPAPage;

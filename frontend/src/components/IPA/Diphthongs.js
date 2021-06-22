import { DIPHTHONGS } from 'constant/ipa';
import React from 'react';
import IPAGroupCollapse from './GroupCollapse';

function Diphthongs() {
  return (
    <>
      <h2 className="dyno-title">2. Nguyên âm đôi (Diphthongs)</h2>
      <h3 className="dyno-sub-title">
        Chúng ta có 8 nguyên âm đôi, mình chia làm 3 nhóm, phát âm theo nguyên
        tắc 7/3, 7 phần cho âm đầu và 3 phần âm sau:
      </h3>

      {DIPHTHONGS.map((item, key) => (
        <IPAGroupCollapse
          title={item.title}
          phoneticList={item.list}
          key={key}
        />
      ))}
    </>
  );
}

export default Diphthongs;

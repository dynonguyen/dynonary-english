import { CONSONANTS } from 'constant/ipa';
import React from 'react';
import IPAGroupCollapse from './GroupCollapse';

function Consonants() {
  return (
    <>
      <h2 className="dyno-title">3. Phụ âm (Consonants)</h2>
      <h3 className="dyno-sub-title">
        Chúng ta có 24 phụ âm, mình chia làm 8 nhóm. Lưu ý về các dạng phụ âm
        như âm vô thanh thì không phát ra âm thanh, luồng hơi không làm rung dây
        thanh quản. Âm hữu thanh phát ra âm thanh, hơi thở đi từ họng, qua lưỡi,
        răng sau đó ra ngoài là cách phát âm của các âm này, dây thanh quản bị
        rung.
      </h3>

      {CONSONANTS.map((item, key) => (
        <IPAGroupCollapse
          title={item.title}
          phoneticList={item.list}
          key={key}
          isNoVoice={true}
        />
      ))}
    </>
  );
}

export default Consonants;

import SettingsIcon from '@material-ui/icons/Settings';
import React, { useState } from 'react';
import SettingModal from './Modal';

function SettingButton() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <SettingModal onClose={() => setOpenModal(false)} open={openModal} />
      <SettingsIcon onClick={() => setOpenModal(true)} />
    </>
  );
}

export default SettingButton;

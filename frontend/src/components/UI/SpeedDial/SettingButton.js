import SettingsIcon from '@material-ui/icons/Settings';
import SettingModal from 'components/SettingModal';
import React, { useState } from 'react';

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

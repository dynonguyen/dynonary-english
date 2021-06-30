import SettingsIcon from '@material-ui/icons/Settings';
import WordPack from 'components/UI/WordPack';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

function SettingWordPack({ classNameIcon, onChoose }) {
  const [openWordPack, setOpenWordPack] = useState(false);

  const onSelect = (v) => {
    onChoose(v);
    setOpenWordPack(false);
  };

  return (
    <>
      <SettingsIcon
        className={classNameIcon}
        onClick={() => setOpenWordPack(true)}
      />

      {/* setting modal */}
      <WordPack
        open={openWordPack}
        onCancel={() => setOpenWordPack(false)}
        onChoose={onSelect}
      />
    </>
  );
}

SettingWordPack.propTypes = {
  classNameIcon: PropTypes.string,
  onChoose: PropTypes.func,
};

SettingWordPack.defaultProps = {
  onChoose: () => {},
};

export default SettingWordPack;

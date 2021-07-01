import SettingsIcon from '@material-ui/icons/Settings';
import WordPack from 'components/UI/WordPack';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

function DDSettingWordPack({ classNameIcon, onChoose }) {
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
      {openWordPack && (
        <WordPack
          open={openWordPack}
          onCancel={() => setOpenWordPack(false)}
          onChoose={onSelect}
        />
      )}
    </>
  );
}

DDSettingWordPack.propTypes = {
  classNameIcon: PropTypes.string,
  onChoose: PropTypes.func,
};

DDSettingWordPack.defaultProps = {
  onChoose: () => {},
};

export default DDSettingWordPack;

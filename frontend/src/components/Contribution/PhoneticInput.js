import Grid from '@material-ui/core/Grid';
import InputCustom from 'components/UI/InputCustom';
import PhoneticKeyboard from 'components/UI/PhoneticKeyboard';
import React, { useState } from 'react';
import InformationTooltip from './InformationTooltip';

function PhoneticInput() {
  const [openKeyboard, setOpenKeyboard] = useState(false);
  const [value, setValue] = useState('');

  const onCloseKeyboard = () => setOpenKeyboard(false);

  return (
    <>
      <Grid item xs={12} md={6} lg={4}>
        <InputCustom
          onClick={() => setOpenKeyboard(true)}
          className="w-100"
          label="Ký âm (*)"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          endAdornment={
            <InformationTooltip title="Nhập ký âm (ngữ âm) của từ mới. Ví dụ: fəˈnetɪk" />
          }
        />
      </Grid>

      {openKeyboard && (
        <Grid item xs={12}>
          <PhoneticKeyboard
            onInput={(c) => setValue(value + c)}
            onClose={onCloseKeyboard}
          />
        </Grid>
      )}
    </>
  );
}

export default PhoneticInput;

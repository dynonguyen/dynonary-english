import Grid from '@material-ui/core/Grid';
import InputCustom from 'components/UI/InputCustom';
import PhoneticKeyboard from 'components/UI/PhoneticKeyboard';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import InformationTooltip from './InformationTooltip';

function PhoneticInput(props) {
  const { errorMessage, error, register, resetFlag, ...restProps } = props;
  const { inputProps } = restProps;
  const { ref, ...rest } = register;
  const inputRef = useRef(null);

  const [openKeyboard, setOpenKeyboard] = useState(false);
  const [value, setValue] = useState('');

  const onCloseKeyboard = () => setOpenKeyboard(false);

  const onInput = (c) => {
    setValue(value + c);
    inputRef.current.focus();
  };

  useEffect(() => {
    if (!resetFlag) return;
    // reset value if parent component reset, except first render
    setValue('');
  }, [resetFlag]);

  return (
    <>
      <Grid item xs={12} md={6} lg={4}>
        <InputCustom
          onClick={() => setOpenKeyboard(true)}
          className="w-100"
          label="Ký âm (*)"
          error={error}
          value={value}
          inputProps={{
            ...inputProps,
            ...rest,
            ref: (e) => {
              ref(e);
              inputRef.current = e;
            },
          }}
          onChange={(e) => setValue(e.target.value)}
          endAdornment={
            <InformationTooltip title="Nhập ký âm (ngữ âm) của từ mới. Ví dụ: fəˈnetɪk" />
          }
        />
        {errorMessage && <p className="text-error">{errorMessage}</p>}
      </Grid>

      {openKeyboard && (
        <Grid item xs={12}>
          <PhoneticKeyboard onInput={onInput} onClose={onCloseKeyboard} />
        </Grid>
      )}
    </>
  );
}

PhoneticInput.propTypes = {
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  register: PropTypes.any,
  resetFlag: PropTypes.number,
};

PhoneticInput.defaultProps = {
  error: false,
  errorMessage: null,
  resetFlag: 0,
};

export default PhoneticInput;

import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import React from 'react';
import useStyle from './style';

function InputCustom(props) {
  const { endAdornment, error, ...propRest } = props;
  const classes = useStyle();

  return (
    <TextField
      classes={classes}
      error={error}
      InputProps={{
        disableUnderline: true,
        endAdornment,
      }}
      variant="filled"
      InputLabelProps={{
        shrink: true,
      }}
      {...propRest}
    />
  );
}

InputCustom.propTypes = {
  endAdornment: PropTypes.any,
  error: PropTypes.bool,
};

InputCustom.defaultProps = {
  endAdornment: null,
  error: false,
};

export default InputCustom;

import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import React from 'react';
import useStyle from './style';

function InputCustom(props) {
  const { endAdornment, ...propRest } = props;
  const classes = useStyle();

  return (
    <TextField
      classes={classes}
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
};

export default InputCustom;

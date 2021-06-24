import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import useStyle from './style';

function SelectCustom(props) {
  const {
    label,
    options,
    className,
    error,
    resetFlag,
    onChange,
    ...selectProps
  } = props;
  const [value, setValue] = useState(options[0]?.value);
  const classes = useStyle();

  useEffect(() => {
    if (!resetFlag) return;
    // reset value if parent component reset, except first render
    setValue(options[0]?.value);
  }, [resetFlag]);

  return (
    <>
      <FormControl className={`${classes.root} ${className}`} variant="filled">
        <InputLabel
          classes={{ root: classes.label, focused: classes.labelFocus }}
          id={label}>
          {label}
        </InputLabel>
        <Select
          classes={{
            root: classes.selectRoot,
            icon: classes.selectIcon,
          }}
          MenuProps={{ classes: { paper: classes.selectMenu } }}
          disableUnderline
          error={error}
          labelId={label}
          label={label}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            onChange(e);
          }}
          {...selectProps}>
          {options &&
            options.map((option, index) => (
              <MenuItem key={index} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </>
  );
}

SelectCustom.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.array,
  error: PropTypes.bool,
  resetFlag: PropTypes.number,
  onChange: PropTypes.func,
};

SelectCustom.defaultProps = {
  className: '',
  label: 'Label',
  options: [],
  error: false,
  resetFlag: 0,
  onChange: function () {},
};

export default SelectCustom;

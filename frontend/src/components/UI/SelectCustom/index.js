import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';
import React from 'react';
import useStyle from './style';

function SelectCustom(props) {
  const { label, options, className, onChange, error, ...selectProps } = props;
  const classes = useStyle();
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
          defaultValue={options[0]?.value}
          error={error}
          labelId={label}
          label={label}
          {...selectProps}
          onChange={onChange}>
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
  onChange: PropTypes.func,
  error: PropTypes.bool,
};

SelectCustom.defaultProps = {
  className: '',
  label: 'Label',
  options: [],
  onChange: function () {},
  error: false,
};

export default SelectCustom;

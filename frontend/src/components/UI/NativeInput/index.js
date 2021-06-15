import InputBase from '@material-ui/core/InputBase';
import { MAX } from 'constant';
import PropTypes from 'prop-types';
import React from 'react';
import useStyle from './style';

function NativeInput({ placeholder, showInput, prefixIcon }) {
  const classes = useStyle();

  const onSearch = (value) => {
    console.log(`Searching for the word "${value}"`);
  };

  const onPressEnter = (e) => {
    const { key, target } = e;
    if (key === 'Enter') {
      onSearch(target.value);
    }
  };

  return (
    <div className={classes.nativeInput}>
      <div
        className={`${classes.icon} flex-center ${
          showInput ? 'show-input' : 'cur-pointer'
        }`}>
        {prefixIcon}
      </div>
      {showInput && (
        <InputBase
          onKeyPress={onPressEnter}
          autoFocus
          placeholder={placeholder}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search', maxLength: MAX.SEARCH_LEN }}
        />
      )}
    </div>
  );
}

NativeInput.propTypes = {
  placeholder: PropTypes.string,
  prefixIcon: PropTypes.any,
  showInput: PropTypes.bool,
};

NativeInput.defaultProps = {
  placeholder: '',
  prefixIcon: null,
  showInput: false,
};

export default NativeInput;

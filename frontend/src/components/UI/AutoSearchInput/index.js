import CloseIcon from '@material-ui/icons/HighlightOffOutlined';
import { MAX } from 'constant';
import { debounce } from 'helper';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import useStyle from './style';

let delayTimer = null;

function AutoSearchInput(props) {
  const { onSearch, ...propRest } = props;

  const classes = useStyle();
  const inputRef = useRef(null);
  const [showIcon, setShowIcon] = useState(false);

  const onChange = (e) => {
    delayTimer = debounce(
      delayTimer,
      () => {
        const { value } = e.target;
        if (value !== '') {
          !showIcon && setShowIcon(true);
        } else {
          showIcon && setShowIcon(false);
        }
        onSearch(value);
      },
      750,
    );
  };

  const onReset = () => {
    inputRef.current.value = '';
    setShowIcon(false);
    onSearch('');
  };

  return (
    <div className={`${classes.root} w-100 position-rel`}>
      <input
        placeholder="Tìm Từ ..."
        className="w-100 h-100"
        maxLength={MAX.SEARCH_LEN}
        onChange={onChange}
        ref={inputRef}
        {...propRest}
      />
      {showIcon && (
        <CloseIcon
          className={`${classes.closeIcon} cur-pointer`}
          onClick={onReset}
        />
      )}
    </div>
  );
}

AutoSearchInput.propTypes = {
  onSearch: PropTypes.func,
};

AutoSearchInput.defaultProps = {
  onSearch: function () {},
};

export default AutoSearchInput;

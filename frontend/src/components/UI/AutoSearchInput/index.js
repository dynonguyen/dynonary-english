import React from 'react';
import useStyle from './style';
import CloseIcon from '@material-ui/icons/HighlightOffOutlined';

function AutoSearchInput(props) {
  const classes = useStyle();

  return (
    <div className={`${classes.root} w-100 position-rel`}>
      <input placeholder="Tìm Từ ..." className="w-100 h-100" {...props} />
      <CloseIcon className={`${classes.closeIcon} cur-pointer`} />
    </div>
  );
}

export default AutoSearchInput;

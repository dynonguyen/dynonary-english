import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import useStyle from './style';
import { Link } from 'react-router-dom';

function HomeLinkButton() {
  const classes = useStyle();
  return (
    <Link to="/" className={`${classes.root} cur-pointer flex-center`}>
      <HomeIcon className={classes.icon} />
    </Link>
  );
}

export default HomeLinkButton;

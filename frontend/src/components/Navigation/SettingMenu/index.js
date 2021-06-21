import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import useStyle from './style';

function SettingMenu({ anchorEl, onClose, menuList }) {
  const classes = useStyle();
  return (
    menuList &&
    menuList.length > 0 && (
      <Menu
        classes={{ paper: classes.root }}
        anchorEl={anchorEl}
        disableScrollLock={true}
        getContentAnchorEl={null}
        onClose={onClose}
        open={Boolean(anchorEl)}
        anchorOrigin={{
          horizontal: 'right',
          vertical: 'bottom',
        }}>
        {menuList.map((item, index) => (
          <Link key={index} to={item.to}>
            <MenuItem className={classes.menuItem}>
              <item.icon className={classes.icon} fontSize="small" />
              <p className={classes.text}>{item.title}</p>
            </MenuItem>
          </Link>
        ))}
      </Menu>
    )
  );
}

SettingMenu.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
  menuList: PropTypes.array,
};

SettingMenu.defaultProps = {
  anchorEl: null,
  onClose: function () {},
  menuList: [],
};

export default SettingMenu;

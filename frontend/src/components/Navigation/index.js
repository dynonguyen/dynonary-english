import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HelpIcon from '@material-ui/icons/Help';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Search from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';
import defaultUserImg from 'assets/images/default-user.png';
import logoUrl from 'assets/images/sm-logo.png';
import NativeInput from 'components/UI/NativeInput';
import ThemeButton from 'components/UI/ThemeButton';
import { ROUTES } from 'constant';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SettingMenu from './SettingMenu';
import useStyle from './style';

const MENU_LIST = [
  {
    title: 'Thông báo',
    icon: NotificationsIcon,
    to: '/',
  },
  {
    title: 'Thông tin cá nhân',
    icon: AccountCircleIcon,
    to: '/',
  },
  {
    title: 'Cài đặt',
    icon: SettingsIcon,
    to: '/',
  },
  {
    title: 'Giúp đỡ',
    icon: HelpIcon,
    to: '/',
  },
  {
    title: 'Đăng xuất',
    icon: ExitToAppIcon,
    to: '/',
  },
];

function Navigation() {
  const classes = useStyle();
  const theme = useTheme();
  const isXsDevice = useMediaQuery(theme.breakpoints.up('xs'));

  const { avt, isAuth } = useSelector((state) => state.userInfo);
  const [showInput, setShowInput] = useState(isXsDevice);
  const [anchorMenu, setAnchorMenu] = useState(null);

  const onOpenMenu = (e) => setAnchorMenu(e.currentTarget);
  const onCloseMenu = () => setAnchorMenu(null);

  return (
    <div className={`${classes.navWrapper} w-100vw`}>
      <div className={`${classes.nav} w-100`}>
        <div className="container h-100 flex-center--ver">
          {/* Logo */}
          {(isXsDevice || !showInput) && (
            <Link to="/">
              <img
                className={`${classes.imgSize} ${classes.logo}`}
                src={logoUrl}
                alt="Logo"
              />
            </Link>
          )}

          {/* control, setting */}
          <div className={`${classes.control} flex-center--ver`}>
            {showInput && !isXsDevice && (
              <ArrowBackIosIcon
                className={`${classes.iconSize} mr-4 cur-pointer`}
                onClick={() => setShowInput(!showInput)}
              />
            )}

            {/* Search bar */}
            <NativeInput
              placeholder="Nhập từ khoá ..."
              showInput={isXsDevice || showInput}
              prefixIcon={
                <Search
                  className={classes.searchIcon}
                  onClick={() => setShowInput(true)}
                />
              }
            />

            <ThemeButton classes={classes.iconSize} />

            {isAuth ? (
              <Avatar
                onClick={onOpenMenu}
                onMouseEnter={onOpenMenu}
                className={`${classes.imgSize} ${classes.avt} cur-pointer`}
                alt="Username"
                src={avt || defaultUserImg}
              />
            ) : (
              <Link to={ROUTES.LOGIN}>
                <Button
                  className="_btn _btn-primary"
                  classes={{
                    root: classes.loginBtn,
                    label: classes.loginLabel,
                  }}
                  variant="contained"
                  color="primary"
                  size="small">
                  Đăng nhập
                </Button>
              </Link>
            )}

            <SettingMenu
              anchorEl={anchorMenu}
              onClose={onCloseMenu}
              menuList={MENU_LIST}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;

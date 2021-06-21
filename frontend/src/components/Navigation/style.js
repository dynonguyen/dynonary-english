import { makeStyles } from '@material-ui/core/styles';

const imgSize = '4.8rem',
  iconSize = '2.4rem';

export default makeStyles((theme) => ({
  navWrapper: {
    paddingBottom: 'var(--nav-height)',
  },

  nav: {
    backgroundColor: 'var(--bg-color-sec)',
    height: 'var(--nav-height)',
    boxShadow: 'var(--box-shadow)',

    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 999,
  },

  logo: {
    marginRight: '0.8rem',
    width: 'auto !important',
  },

  imgSize: {
    height: imgSize,
    width: imgSize,
  },

  iconSize: {
    fontSize: `${iconSize} !important`,
    color: 'var(--label-color)',
  },

  control: {
    marginLeft: 'auto',
  },

  avt: {
    transition: theme.transitions.easing.easeIn,
    '&:hover, &:active': {
      opacity: 0.85,
    },
  },

  searchIcon: {
    fontSize: iconSize,
    color: 'var(--label-color)',
  },

  loginBtn: {
    height: '3.7rem',
    minWidth: '12rem',
  },

  loginLabel: {
    fontSize: '1.4rem',
  },
}));

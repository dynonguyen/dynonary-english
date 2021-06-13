import { makeStyles } from '@material-ui/core/styles';

const imgSize = '4.8rem',
  iconSize = '2.4rem';

export default makeStyles((theme) => ({
  navWrapper: {
    marginBottom: 'var(--nav-height)',
  },

  nav: {
    backgroundColor: 'var(--nav-bg-color)',
    height: 'var(--nav-height)',
    boxShadow:
      '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',

    position: 'fixed',
    top: 0,
    left: 0,
  },

  imgSize: {
    height: imgSize,
    width: imgSize,
  },

  iconSize: {
    fontSize: `${iconSize} !important`,
    color: 'var(--text-color)',
  },

  control: {
    gap: '1.2rem',
  },
}));

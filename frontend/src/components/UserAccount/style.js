import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  wrap: {
    minHeight: 'calc(100vh - 7.2rem)',
  },

  root: {
    backgroundColor: 'var(--bg-color-sec)',
    padding: '3.6rem 5.6rem',
    borderRadius: 'var(--border-radius)',
    textAlign: 'center',
    boxShadow: 'var(--box-shadow)',
  },

  avtWrap: {
    width: '15rem',
    height: '15rem',
    position: 'relative',
  },

  avt: {
    borderRadius: '50%',
  },

  cameraIconWrap: {
    position: 'absolute',
    right: 0,
    bottom: 0,

    width: '4.2rem',
    height: '4.2rem',
    padding: '1.2rem',

    backgroundColor: 'var(--primary-color)',
    borderRadius: '50%',
    cursor: 'pointer',
    border: 'solid 5px var(--bg-color-sec)',

    '&:hover, &:active': {
      opacity: 0.85,
    },
  },

  cameraIcon: {
    color: 'var(--text-color)',
    fontSize: '2rem',
  },

  fileInput: {
    position: 'absolute',
    width: '4.2rem',
    height: '4.2rem',
    top: 0,
    left: 0,
    opacity: 0,
    cursor: 'pointer',
  },

  name: {
    fontSize: '2.4rem',
    lineHeight: 1.5,
    letterSpacing: '0.75px',
  },

  username: {
    fontSize: '1.5rem',
    fontWeight: 400,
    color: 'var(--label-color)',
    letterSpacing: '0.75px',
  },

  info: {
    margin: '2.4rem 0',

    '& p': {
      lineHeight: 2,
      fontSize: '1.6rem',
      letterSpacing: '0.75px',
      color: 'var(--text-color)',
    },
  },

  coin: {
    color: 'var(--label-color)',
    fontWeight: 'bold',
    fontSize: '2rem',
  },
}));

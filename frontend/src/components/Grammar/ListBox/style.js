import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    backgroundColor: 'var(--bg-color-sec)',
    overflow: 'hidden',
    justifyContent: 'space-between',
    borderRadius: 'var(--border-radius)',
    boxShadow: 'var(--box-shadow-2)',
    position: 'relative',
    transition: 'all 0.25s',

    '&::before': {
      content: '""',
      height: '100%',
      width: '5px',
      backgroundColor: 'transparent',
      position: 'absolute',
      transition: 'all 0.25s',
      top: 0,
      right: 0,
    },

    '&:hover, &:active': {
      '&::before': {
        backgroundColor: 'var(--primary-color)',
      },
    },

    '&.active': {
      boxShadow: 'none',
      border: 'solid 1px var(--border-color)',

      '&::before': {
        backgroundColor: 'var(--accent-color) !important',
      },
    },
  },

  number: {
    width: '5.4rem',
    minWidth: '5.4rem',
    height: '5.4rem',
    flexBasis: '5.4rem',

    backgroundColor: 'var(--primary-color)',
    borderBottomLeftRadius: '50%',
    borderBottomRightRadius: '50%',
    borderTopLeftRadius: 'var(--border-radius)',
    borderTopRightRadius: 'var(--border-radius)',
    boxShadow: '1px 3px 6px 0px rgba(0,0,0, 0.25)',

    color: '#fff',
    fontWeight: 'bold',
    fontSize: '2.2rem',

    '&.active': {
      backgroundColor: 'var(--accent-color)',
    },
  },

  content: {
    padding: '1.6rem 2.4rem',
    flexGrow: 1,
  },

  title: {
    color: 'var(--title-color)',
    fontSize: '2.2rem',
    fontWeight: 500,
    marginBottom: '0.8rem',
  },

  desc: {
    color: 'var(--text-color)',
    fontSize: '1.5rem',
    letterSpacing: '0.75px',
    fontWeight: 500,
    lineHeight: 1.5,
  },

  iframe: {
    marginTop: 8,
    width: '100%',
    padding: '1.6rem',
    backgroundColor: '#fff',
    border: 'solid 1px var(--border-color)',
    borderRadius: 'var(--border-radius)',
    transition: 'all 0.5s',
    minHeight: '75rem',
  },

  arrowIcon: {
    width: '3.6rem',
    height: '3.6rem',
    backgroundColor: 'var(--accent-color)',
    borderRadius: '50%',

    fontSize: '4.8rem',
    color: '#fff',

    position: 'absolute',
    bottom: 36,
    right: 36,
    zIndex: 99,

    cursor: 'pointer',
    transition: 'all 0.25s',
    '&:hover, &:active': {
      transform: 'scale(1.1)',
    },
  },
}));

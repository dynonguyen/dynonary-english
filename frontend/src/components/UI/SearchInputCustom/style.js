import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  nativeInput: {
    position: 'relative',
    borderRadius: 'var(--border-radius)',
    marginLeft: 0,
  },

  icon: {
    height: '100%',

    '&.show-input': {
      padding: '0 1.2rem',
      position: 'absolute',
      pointerEvents: 'none',
    },
  },

  inputRoot: {
    color: 'var(--text-color)',
  },

  inputInput: {
    border: 'solid 1px var(--border-color)',
    padding: '0.8rem 0.8rem 0.8rem 0',
    paddingLeft: 'calc(1em + 3.2rem)',
    transition: theme.transitions.create('width'),
    width: '100%',
    fontSize: '1.6rem',

    [theme.breakpoints.up('xs')]: {
      width: '16ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },

  resMenu: {
    width: '28rem',
    maxWidth: '32rem',
    backgroundColor: 'var(--bg-color-sec)',
  },
}));

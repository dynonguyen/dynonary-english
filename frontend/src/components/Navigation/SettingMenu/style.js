import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    width: '35rem',
    backgroundColor: 'var(--bg-color-sec)',
    boxShadow: 'var(--box-shadow)',
  },

  menuItem: {
    display: 'flex',
    padding: '0.8rem 1.8rem',
    maxWidth: '100%',

    '&:hover, &:active': {
      backgroundColor: 'var(--hover-color) !important',
    },
  },

  icon: {
    color: 'var(--grey)',
    marginRight: '1.2rem',
  },

  text: {
    textAlign: 'justify',
    whiteSpace: 'pre-wrap',
    maxWidth: '100%',

    fontWeight: '500',
    fontSize: '1.8rem',
  },
}));

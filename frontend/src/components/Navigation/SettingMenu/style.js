import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    width: '35rem',
    backgroundColor: 'var(--nav-bg-color)',
    boxShadow: 'var(--box-shadow)',
  },

  menuItem: {
    display: 'flex',
    gap: 12,
    padding: '0.8rem 1.8rem',
    maxWidth: '100%',

    '&:hover, &:active': {
      backgroundColor: 'var(--hover-color) !important',
    },
  },

  icon: {
    color: 'var(--grey)',
  },

  text: {
    textAlign: 'justify',
    whiteSpace: 'pre-wrap',
    maxWidth: '100%',

    fontWeight: '500',
    fontSize: '1.8rem',
  },
}));

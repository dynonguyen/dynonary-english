import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  groupCollapse: {
    boxShadow: 'var(--box-shadow-2)',
    backgroundColor: 'var(--bg-color-accent)',
    borderRadius: 'var(--border-radius)',
    border: 'none',
    margin: '2.4rem 0',
  },

  arrowIcon: {
    color: 'var(--grey)',
  },

  gcTitle: {
    color: 'var(--secondary-color)',
    fontWeight: 500,
    fontSize: '2rem',
  },

  gcDetails: {
    display: 'flex',
  },

  word: {
    display: 'inline-block',
    fontSize: '2.4rem',
    color: 'var(--accent-color)',
    margin: '0.8rem 1rem 0.8rem 0',
  },

  gcDesc: {
    fontSize: '1.7rem',
    color: 'var(--text-color)',
    margin: '1.2rem 0',
  },

  example: {
    '& b': {
      fontSize: '1.6rem',
      textDecoration: 'underline',
    },
    color: 'var(--text-color)',
    fontSize: '1.6rem',
  },

  mouthShapeImg: {
    width: '12rem',
    height: '12rem',
    marginLeft: '1rem',
  },
}));

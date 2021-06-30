import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    marginTop: '3.2rem',

    '& ::-webkit-scrollbar': {
      width: '3px',
    },

    '& ::-webkit-scrollbar-track': {
      borderRadius: '25px',
    },
  },

  icon: {
    color: 'var(--label-color)',
    fontSize: '2.8rem',
    cursor: 'pointer',
    transition: 'all 0.25s',

    '&:hover, &:active': {
      color: 'var(--primary-color)',
    },
  },

  contentWrap: {
    marginTop: '2.4rem',
  },

  list: {
    padding: '1.2rem 2.4rem',
    backgroundColor: 'var(--bg-color-accent)',
    borderRadius: 'var(--border-radius)',
    height: 'calc(100vh - 20rem)',
    overflow: 'auto',
  },

  listItem: {
    margin: '0.6rem 0',
  },
}));

import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    marginTop: '3.2rem',

    '& ::-webkit-scrollbar': {
      width: '2px',
    },

    '& ::-webkit-scrollbar-track': {
      background: 'none',
    },

    '& ::-webkit-scrollbar-thumb': {
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

  listWrap: {
    padding: '1.2rem 0.4rem',
    backgroundColor: 'var(--bg-color-accent)',
    borderRadius: 'var(--border-radius)',
  },

  list: {
    padding: '0 2.4rem',
    height: 'calc(100vh - 24rem)',
    overflow: 'auto',
  },

  listItem: {
    margin: '0.6rem 0',
  },

  skeleton: {
    height: '100%',

    '& > *': {
      margin: '1.2rem 0',
      height: 'calc(10% - 1.2rem)',
    },
  },
}));

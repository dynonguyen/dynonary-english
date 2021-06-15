import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    padding: '1.8rem 1.2rem',
    boxShadow:
      '0px 2px 1px -1px rgb(0 0 0 / 18%), 0px 1px 6px 0px rgb(0 0 0 / 12%), 0px 1px 4px 0px rgb(0 0 0 / 8%)',
    borderRadius: 'var(--sm-border-radius)',
    cursor: 'pointer',
    backgroundColor: 'var(--bg-color-accent)',
    transition: 'all 0.25s',

    minHeight: '8rem',
    height: '100%',

    '&:hover, &:active': {
      backgroundColor: 'var(--hover-color)',
    },

    [theme.breakpoints.up('sm')]: {
      padding: '2.4rem 1.8rem',
    },

    [theme.breakpoints.up('md')]: {
      minHeight: '18rem',
    },
  },

  icon: {
    width: '4.2rem',
    height: '4.2rem',
    marginRight: '1.4rem',
  },

  title: {
    color: 'var(--title-color)',
    fontWeight: 500,
    fontSize: '2rem',
    letterSpacing: '0.5px',
  },

  subTitle: {
    display: 'none',
    marginTop: '0.6rem',
    color: 'var(--text-color)',
    fontSize: '1.4rem',
    letterSpacing: '0.5px',

    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));

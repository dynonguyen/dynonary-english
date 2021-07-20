import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  paper: {
    maxWidth: 350,
    width: '100%',
    backgroundColor: 'var(--bg-color-sec)',
    padding: '2.4rem 3.2rem',

    [theme.breakpoints.up('sm')]: {
      maxWidth: 480,
    },

    [theme.breakpoints.up('md')]: {
      maxWidth: 678,
    },

    maxHeight: '85vh',
  },

  title: {
    color: 'var(--title-color)',
    textTransform: 'capitalize',
    fontSize: '2.2rem',
    wordSpacing: 1.5,
    fontWeight: 500,
  },

  content: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '0.8rem',

    '& *': {
      fontSize: '1.6rem',
      lineHeight: 1.5,
      letterSpacing: '0.5px',
      color: 'var(--text-color)',
    },
  },

  closeIcon: {
    fontSize: '3.2rem',
    color: 'var(--title-color)',
    transition: 'all 0.5s',

    '&:hover, &:active': {
      transform: 'rotate(360deg)',
    },
  },

  label: {
    color: 'var(--label-color)',
    textDecoration: 'underline',
    fontSize: '1.7rem',
  },

  picture: {
    width: '5.6rem',
    height: '5.6rem',
  },

  word: {
    fontSize: '2rem',
    color: 'var(--secondary-color)',
    fontWeight: 'bold',
  },

  type: {
    fontWeight: 500,
  },

  mean: {
    color: 'var(--text-color)',
  },

  phonetic: {
    fontSize: '1.7rem',
    color: 'var(--phonetic-color)',
  },

  topics: {
    margin: '0 -0.4rem',

    '& > *': {
      margin: '0.4rem',
    },
  },
}));

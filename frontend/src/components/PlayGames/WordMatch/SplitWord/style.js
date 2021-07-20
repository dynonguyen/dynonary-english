import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr 1fr 1fr',
    gap: '0.8rem',
  },

  helpIcon: {
    fontSize: '3.6rem',
    color: 'var(--title-color)',
  },

  speaker: {
    fontSize: '3.6rem !important',
  },

  mean: {
    fontSize: '2.4rem',
    fontWeight: 500,
    color: 'var(--text-color)',
  },

  answer: {
    fontSize: '1.6rem',
  },

  split: {
    padding: '0.8rem',
    margin: '0 -0.6rem',
    flexWrap: 'wrap',
    alignContent: 'center',
    '& > *': {
      margin: '0.6rem',
    },

    [theme.breakpoints.up('md')]: {
      maxWidth: 767,
      margin: '0 auto',
    },
  },

  char: {
    color: 'var(--text-color)',
    fontSize: '1.8rem',
    fontWeight: 500,

    width: '4.2rem',
    height: '4.2rem',
    lineHeight: '4.2rem',
    textAlign: 'center',

    backgroundColor: 'var(--bg-color-accent)',
    cursor: 'pointer',
    boxShadow: '1px 1px 4px 0px rgba(0,0,0,0.2)',
    borderRadius: 4,
    transition: 'all 0.25s',

    '&:hover, &:active': {
      backgroundColor: 'var(--hover-color)',
    },

    '&.wrong': {
      backgroundColor: 'var(--error-color)',
    },

    '&.right': {
      backgroundColor: 'var(--right-color)',
    },
  },

  '@global @keyframes aniSlide': {
    '0%': {
      transform: 'none',
      opacity: 0,
    },
    '50%': {
      opacity: 0.3,
    },
    '100%': {
      transform: 'translateY(-8rem)',
      opacity: 0,
      visibility: 'hidden',
    },
  },
}));

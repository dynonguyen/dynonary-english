import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .disabled': {
      pointerEvents: 'none',
    },
  },

  summary: {
    margin: '1.4rem 0',
    '& > *': {
      fontSize: '1.6rem',
      fontWeight: 400,
      color: 'var(--label-color)',
    },

    '& b': {
      padding: '0 0.4rem',
      fontSize: '2rem',
    },
  },

  summaryIcon: {
    fontSize: '2.4rem',
    margin: '0 0.4rem',
  },

  questionBox: {
    textAlign: 'center',
    padding: '6rem 1.2rem',

    [theme.breakpoints.up('md')]: {
      padding: '8rem 1.2rem',
    },
  },

  question: {
    fontSize: '2.4rem',
    color: 'var(--text-color)',
    fontWeight: 'bold',
  },

  result: {
    fontSize: '1.5rem',
  },

  answers: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr',
    gridGap: '1.2rem',

    [theme.breakpoints.up('md')]: {
      maxWidth: '50%',
      minWidth: '40rem',
      gridGap: '2.4rem',
      margin: 'auto',
    },
  },

  answerItem: {
    height: '17rem',
    backgroundColor: 'var(--bg-color-accent)',
    borderRadius: 'var(--border-radius)',

    color: 'var(--text-color)',
    fontSize: '2rem',

    cursor: 'pointer',
    transition: 'all 0.25s',
    '&:hover, &:active': {
      backgroundColor: 'var(--hover-color)',
    },

    '& .phonetic': {
      opacity: 0.8,
      fontSize: '1.6rem',
    },

    '&.right': {
      border: 'solid 1px var(--right-color)',
    },
    '&.wrong': {
      border: 'solid 1px var(--error-color)',
    },
  },
}));

export const cwResultStyle = makeStyles(() => ({
  root: {
    minHeight: '65vh',
  },

  img: {
    height: '8rem',
    marginBottom: '2.4rem',
  },

  result: {
    color: 'var(--label-color)',
    fontSize: '1.6rem',

    '& b': {
      color: 'var(--text-color)',
      fontSize: '2.4rem',
      padding: '0 0.4rem',
    },
  },

  icon: {
    margin: '0 0.6rem',
  },
}));

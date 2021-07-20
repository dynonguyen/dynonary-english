import { makeStyles } from '@material-ui/core/styles';
import { gameBoxStyle } from 'components/UI/style';

export default makeStyles((theme) => ({
  ...gameBoxStyle(theme),

  mainContent: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '3fr 7fr',
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
    gap: '1.2rem',
    padding: '2.4rem 0',

    [theme.breakpoints.up('md')]: {
      width: '100%',
      margin: '0 auto',
      maxWidth: '50%',
      minWidth: '40rem',
      gap: '2.4rem',
    },
  },

  answerItem: {
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

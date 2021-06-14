import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: '1.2rem',
    right: '1.2rem',

    width: '5rem',
    height: '5rem',
    padding: '1.4rem',

    borderRadius: '50%',
    boxShadow: 'var(--box-shadow)',
    backgroundColor: 'var(--accent-color)',

    transition: 'all 0.25s',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },

  icon: {
    fontSize: '2.8rem',
    color: 'var(--light-grey)',
  },
}));

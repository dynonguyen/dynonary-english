import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    padding: '2.4rem 3.6rem',
    boxShadow: 'var(--box-shadow)',
    borderRadius: 'var(--border-radius)',
    width: '35rem',
    gap: '2.4rem',
    backgroundColor: 'var(--bg-color-sec)',
  },

  title: {
    fontSize: '2.4rem',
    color: 'var(--text-color)',
  },

  accountIcon: {
    fontSize: '3.6rem',
    color: 'var(--text-color)',
  },

  forgotPw: {
    color: 'var(--title-color)',
    opacity: 0.65,
    fontWeight: 500,
    fontSize: '1.4rem',
    textAlign: 'right',

    '&:hover': {
      opacity: 1,
    },
  },

  icon: {
    fontSize: '1.8rem',
    color: 'var(--grey)',
    cursor: 'pointer',
  },

  visiblePw: {
    color: 'var(--primary-color)',
  },
}));

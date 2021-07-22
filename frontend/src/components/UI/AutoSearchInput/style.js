import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    margin: '2.4rem 0',

    '& input': {
      outline: 'none',
      padding: '1.6rem 1.2rem',
      fontSize: '1.8rem',
      color: 'var(--text-color)',
      background: 'none',
      border: 'solid 1px var(--border-color)',
      backgroundColor: 'var(--bg-color-accent)',
      borderRadius: 'var(--border-radius)',

      transition: 'all 0.25s',
      '&:focus': {
        borderColor: 'var(--secondary-color)',
      },
    },
  },

  closeIcon: {
    position: 'absolute',
    right: '1.4rem',
    top: '50%',
    transform: 'translateY(-50%)',

    fontSize: '2.4rem',
    color: 'var(--grey)',
    '&:hover, &:active': {
      color: 'var(--primary-color)',
    },
  },
}));

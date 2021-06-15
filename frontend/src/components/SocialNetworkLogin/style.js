import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  socialBtn: {
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    padding: '0.8rem 1.2rem',

    border: 'solid 1px var(--input-border-color)',
    backgroundColor: 'var(--bg-color-accent)',
    borderRadius: 'var(--border-radius)',
    cursor: 'pointer',
    transition: 'all 0.25s',

    '&:hover': {
      filter: 'brightness(0.85)',
    },
  },

  socialImg: {
    width: '2.8rem',
    height: '2.8rem',
  },

  socialName: {
    color: 'var(--text-color)',
    marginLeft: '0.6rem',
    fontSize: '1.4rem',
    fontWeight: 700,
  },
}));
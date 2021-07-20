import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    backgroundColor: 'var(--bg-color-main)',
    boxShadow: 'var(--box-shadow)',
    borderRadius: 'var(--border-radius)',
    padding: '1.2rem',

    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gap: '0.6rem',

    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(10, 1fr)',
    },

    '& span': {
      color: 'var(--text-color)',
      fontSize: '2rem',
      fontWeight: 500,
      padding: '0.8rem',
      cursor: 'pointer',
      textAlign: 'center',
      backgroundColor: 'var(--bg-color-accent)',
      borderRadius: 'var(--sm-border-radius)',

      '&.close': {
        backgroundColor: 'var(--secondary-color)',
      },

      transition: 'all 0.25s',
      '&:hover, &:active': {
        backgroundColor: 'var(--primary-color)',
      },
    },
  },
}));

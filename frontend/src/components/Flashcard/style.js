import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  iconWrap: {
    margin: '0 -0.8rem',
    display: 'flex',
  },

  icon: {
    color: 'var(--text-color)',
    fontSize: '2.4rem',
    margin: '0 0.8rem',
    cursor: 'pointer',

    '&.active': {
      color: 'var(--secondary-color)',
    },
  },
}));

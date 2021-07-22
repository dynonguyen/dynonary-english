import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    border: 'solid 1px var(--secondary-color)',
    padding: '0.4rem 0.8rem',
    width: 'max-content',
    borderRadius: '25px',

    transition: 'all 0.25s',

    '&.active': {
      backgroundColor: 'var(--secondary-color)',
    },

    '&:hover, &:active': {
      filter: 'brightness(0.85)',
    },
  },

  icon: {
    borderRadius: '50%',
    width: '2.8rem',
    height: '2.8rem',
    marginRight: '0.5rem',
  },

  text: {
    color: 'var(--text-color)',
    fontWeight: 500,
    fontSize: '1.4rem',
    paddingLeft: '0.4rem',
    paddingRight: '0.8rem',
  },
}));

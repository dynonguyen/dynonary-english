import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    margin: 'auto -1.2rem',
  },

  item: {
    margin: '0 0.6rem',
    padding: '1.2rem',
    borderRadius: '50%',

    width: '4.2rem',
    height: '4.2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    transition: 'all 0.25s',
    cursor: 'pointer',

    '&:hover, &:active': {
      backgroundColor: 'var(--hover-color)',
    },

    '& .icon': {
      color: 'var(--text-color)',
      fontSize: '2.4rem',
    },

    '&.active': {
      border: 'solid 1px var(--secondary-color)',

      '& .icon': {
        color: 'var(--secondary-color)',
      },
    },
  },
}));

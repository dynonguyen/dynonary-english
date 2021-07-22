import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  input: {
    display: 'none',
  },

  btn: {
    minHeight: '5.6rem',
    backgroundColor: 'var(--bg-color-accent) !important',
    boxShadow: 'none !important',
    border: 'solid 1px var(--border-color)',
    color: 'var(--label-color)',

    textTransform: 'capitalize',
    '&:hover, &:active': {
      opacity: '0.85',
    },
  },

  skeleton: {
    height: '100% !important',
    backgroundColor: 'var(--bg-color-accent)',
  },

  review: {
    backgroundColor: 'var(--bg-color-accent)',
    border: 'solid 1px var(--border-color)',
    padding: '0.6rem 1.2rem',
    borderRadius: 'var(--sm-border-radius)',

    '& img': {
      height: '5.4rem',
      width: '5.4rem',
    },

    '& p': {
      color: 'var(--text-color)',
      fontSize: '1.2rem',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      padding: '0 0.4rem',
    },

    '& .icon': {
      color: 'var(--label-color)',
      fontSize: '2.4rem',

      transition: 'all 0.25s',
      '&:hover, &:active': {
        transform: 'scale(1.1)',
      },
    },
  },
}));

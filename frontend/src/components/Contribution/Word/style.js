import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    padding: '2.8rem 3.6rem',
    boxShadow: 'var(--box-shadow)',
    borderRadius: 'var(--border-radius)',
    backgroundColor: 'var(--bg-color-sec)',
  },

  title: {
    color: 'var(--title-color)',
    textTransform: 'capitalize',
    fontSize: '2.8rem',
    marginBottom: '1.2rem',
  },

  grid: {
    marginTop: '2.4rem',
    marginBottom: '2.4rem',
  },

  tooltipIcon: {
    fontSize: '1.6rem',
    color: 'var(--label-color)',
  },

  btn: {
    marginLeft: '1rem',
    textTransform: 'none',
    minWidth: '14rem',
  },

  btnReset: {
    borderColor: 'var(--accent-color) !important',
    color: 'var(--accent-color) !important',

    '&:hover, &:active': {
      filter: 'brightness(0.85)',
    },
  },

  sentenceInput: {
    minHeight: '8rem',
  },
}));

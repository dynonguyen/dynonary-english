import { makeStyles } from '@material-ui/core/styles';

export const topicStyle = makeStyles((theme) => ({
  button: {
    backgroundColor: 'var(--bg-color-accent) !important',
    boxShadow: 'none !important',
    border: 'solid 1px var(--input-border-color)',
    color: 'var(--label-color)',
    textTransform: 'capitalize',
    minHeight: '5.6rem',

    '&:hover, &:active': {
      opacity: 0.85,
    },
  },

  tagsWrap: {
    paddingTop: '0 !important',
    paddingBottom: '0 !important',
  },

  tags: {
    display: 'flex',
    flexWrap: 'wrap',

    padding: '2.4rem 1.2rem',
    backgroundColor: 'var(--bg-color-accent)',
    borderRadius: 'var(--sm-border-radius)',

    '& > *': {
      margin: '0.8rem',
    },
  },
}));

export default makeStyles((theme) => ({
  root: {
    margin: '2.4rem 0',
    padding: '2.8rem 3.6rem',
    boxShadow: 'var(--box-shadow)',
    borderRadius: 'var(--border-radius)',
    backgroundColor: 'var(--bg-color-sec)',

    [theme.breakpoints.up('md')]: {
      margin: '6.4rem 0',
    },
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
}));

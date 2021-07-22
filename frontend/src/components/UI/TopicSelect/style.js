import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  button: {
    backgroundColor: 'var(--bg-color-accent) !important',
    boxShadow: 'none !important',
    border: 'solid 1px var(--border-color)',
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

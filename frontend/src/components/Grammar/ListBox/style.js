import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    backgroundColor: 'var(--bg-color-sec)',
    overflow: 'hidden',
    justifyContent: 'space-between',
    borderRadius: 'var(--border-radius)',

    transition: 'all 0.25s',
    '&:hover, &:active': {
      backgroundColor: 'var(--hover-color)',
    },
  },

  number: {
    width: '5.4rem',
    minWidth: '5.4rem',
    height: '5.4rem',
    flexBasis: '5.4rem',

    backgroundColor: 'var(--primary-color)',
    borderBottomLeftRadius: '50%',
    borderBottomRightRadius: '50%',
    borderTopLeftRadius: 'var(--border-radius)',
    borderTopRightRadius: 'var(--border-radius)',

    color: '#fff',
    fontWeight: 'bold',
    fontSize: '2.2rem',
  },

  content: {
    padding: '1.6rem 2.4rem',
    flexGrow: 1,
  },

  title: {
    color: 'var(--title-color)',
    fontSize: '2.4rem',
    fontWeight: 500,
    marginBottom: '0.8rem',
  },

  desc: {
    color: 'var(--text-color)',
    fontSize: '1.6rem',
    letterSpacing: '0.75px',
    fontWeight: 500,
    lineHeight: 1.5,
  },
}));

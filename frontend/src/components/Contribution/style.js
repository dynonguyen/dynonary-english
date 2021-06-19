import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    marginTop: '2.4rem',
    marginBottom: '2.4rem',
    padding: '4.8rem 2.4rem',
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
  },
}));

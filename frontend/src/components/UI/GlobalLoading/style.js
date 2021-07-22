import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    zIndex: 9999,

    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  },
  icon: {
    color: 'var(--secondary-color)',
    marginBottom: '1.2rem',
  },
  text: {
    fontSize: '2.2rem',
    color: 'var(--secondary-color)',
  },
}));

import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  colorBox: {
    width: '100%',
    height: '5rem',
    backgroundColor: 'red',
  },

  colorBoxInput: {
    opacity: 0,
    width: '100%',
    height: '100%',
    cursor: 'pointer',
  },

  paletteRoot: {
    display: 'grid',
    gridTemplateColumns: 'repeat(10, 1fr)',
    marginTop: '1.2rem',
  },
}));

import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  dialogPaper: {
    backgroundColor: 'var(--bg-color-sec)',
    minWidth: '370px',
  },

  title: {
    '& > *': {
      color: 'var(--title-color)',
    },
  },

  breakLine: {
    borderColor: 'var(--input-border-color)',
  },
}));

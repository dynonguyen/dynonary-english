import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiInputBase-root': {
      backgroundColor: 'var(--bg-color-accent)',
      borderRadius: 'var(--border-radius)',
      border: 'solid 1px var(--input-border-color)',
      color: 'var(--text-color)',

      '& ::placeholder': {
        color: 'var(--text-color)',
        fontSize: '1.6rem',
      },
    },

    '& .MuiInputBase-root.Mui-focused': {
      borderColor: 'var(--secondary-color)',
    },

    '& .MuiFormLabel-root': {
      color: 'var(--grey)',
      fontSize: '1.5rem',
    },

    '& label.Mui-focused': {
      color: 'var(--secondary-color)',
    },
  },
}));

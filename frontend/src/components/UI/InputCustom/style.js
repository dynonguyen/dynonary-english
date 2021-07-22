import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    // input
    '& .MuiInputBase-root': {
      backgroundColor: 'var(--bg-color-accent)',
      borderRadius: 'var(--border-radius)',
      border: 'solid 1px var(--border-color)',
      color: 'var(--text-color)',

      '& ::placeholder': {
        color: 'var(--text-color)',
        fontSize: '1.6rem',
      },
    },

    '& .MuiInputBase-root.Mui-focused': {
      borderColor: 'var(--secondary-color)',
    },

    // label
    '& .MuiFormLabel-root': {
      color: 'var(--label-color)',
      fontSize: '1.5rem',
    },

    '& label.Mui-focused': {
      color: 'var(--secondary-color)',
    },

    // error
    '& .MuiFormLabel-root.Mui-error': {
      color: 'var(--error-color)',
    },

    '& .MuiInputBase-root.Mui-error': {
      borderColor: 'var(--error-color)',
    },
  },
}));

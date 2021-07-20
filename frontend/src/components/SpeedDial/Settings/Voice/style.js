import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '100%',
    gap: '1.6rem',

    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: '1fr 1fr 1fr',
    },
  },

  selectRoot: {
    maxWidth: '100%',
    width: '100%',

    '& .MuiSelect-root': {
      color: 'var(--label-color)',
    },

    '& .MuiInputLabel-root': {
      color: 'var(--secondary-color)',
    },

    '& .MuiSelect-root': {
      padding: '1.4rem',
    },

    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'var(--border-color) !important',
    },

    '& .MuiSelect-icon': {
      color: 'var(--label-color)',
    },
  },

  select: {
    color: 'var(--text-color)',
    fontSize: '1.5rem',
  },

  menu: {
    backgroundColor: 'var(--bg-color-accent)',
    maxHeight: '25rem',

    '& .MuiMenuItem-root': {
      fontSize: '1.5rem',
      padding: '1rem 1.6rem',

      '&:hover, &:active, &.Mui-selected': {
        backgroundColor: 'var(--hover-color)',
      },
    },
  },

  icon: {
    color: 'var(--label-color)',
    fontSize: '2.8rem',
  },

  slider: {
    margin: '0 1.2rem',
  },

  thumbSlider: {
    backgroundColor: 'var(--accent-color) !important',
  },

  railSlider: {
    backgroundColor: 'var(--secondary-color) !important',
  },

  trackSlider: {
    backgroundColor: 'var(--primary-color) !important',
  },

  valueText: {
    color: 'var(--text-color)',
    fontSize: '1.4rem',
  },
}));

import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    position: 'fixed',
    bottom: 16,
    right: 16,

    '& .MuiSpeedDialAction-fab': {
      backgroundColor: 'var(--bg-color-accent)',
    },

    '& .MuiFab-label': {
      color: 'var(--label-color)',
    },

    '& .MuiSpeedDialIcon-icon': {
      color: 'var(--light-grey)',
    },
  },

  fab: {
    width: '5rem',
    height: '5rem',
    backgroundColor: 'var(--accent-color)',

    '&:hover, &:active': {
      backgroundColor: 'var(--accent-color)',
    },
  },
}));

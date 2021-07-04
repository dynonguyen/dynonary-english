export const gameBoxStyle = (theme) => ({
  root: {
    height: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '2fr 1fr 17fr',
    gridRowGap: '0.8rem',

    [theme.breakpoints.up('sm')]: {
      height: '85%',
      gridRowGap: '1.2rem',
    },

    '& .disabled': {
      pointerEvents: 'none',
    },
  },

  summary: {
    margin: '1.4rem 0',
    '& > *': {
      fontSize: '1.6rem',
      fontWeight: 400,
      color: 'var(--label-color)',
    },

    '& b': {
      padding: '0 0.4rem',
      fontSize: '2rem',
    },
  },

  summaryIcon: {
    fontSize: '2.4rem',
    margin: '0 0.4rem',
  },
});

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

export const dictionaryRoot = (theme) => ({
  root: {
    marginTop: '3.2rem',

    '& ::-webkit-scrollbar': {
      width: '2px',
    },

    '& ::-webkit-scrollbar-track': {
      background: 'none',
    },

    '& ::-webkit-scrollbar-thumb': {
      borderRadius: '25px',
    },
  },

  icon: {
    color: 'var(--label-color)',
    fontSize: '2.8rem',
    cursor: 'pointer',
    transition: 'all 0.25s',

    '&:hover, &:active': {
      color: 'var(--primary-color)',
    },
  },

  contentWrap: {
    marginTop: '2.4rem',
  },

  listWrap: {
    padding: '1.2rem 0.4rem',
    backgroundColor: 'var(--bg-color-accent)',
    borderRadius: 'var(--border-radius)',
  },

  list: {
    padding: '0 2.4rem',
    height: 'calc(100vh - 24rem)',
    overflow: 'auto',
  },

  listItem: {
    margin: '0.6rem 0',
  },

  skeleton: {
    height: '100%',

    '& > *': {
      margin: '1.2rem 0',
      height: 'calc(10% - 1.2rem)',
    },
  },
});

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

export const dictionaryRoot = () => ({
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

  contentWrap: {
    marginTop: '2.4rem',
  },

  listWrap: {
    padding: '1.2rem 0.4rem',
    backgroundColor: 'var(--bg-color-accent)',
    borderRadius: 'var(--border-radius)',
    border: 'solid 1px var(--border-color)',
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

export const dialogMUIRoot = () => ({
  dialogPaper: {
    backgroundColor: 'var(--bg-color-sec)',
  },

  title: {
    '& > *': {
      color: 'var(--title-color)',
    },
  },

  content: {
    '& *': {
      color: 'var(--text-color)',
    },
  },

  breakLine: {
    borderColor: 'var(--border-color)',
  },
});

export const formStyle = () => ({
  root: {
    padding: '2.4rem 3.6rem',
    boxShadow: 'var(--box-shadow)',
    borderRadius: 'var(--border-radius)',
    width: '35rem',
    backgroundColor: 'var(--bg-color-sec)',

    '& > *': {
      marginTop: '1.2rem',
      marginBottom: '1.2rem',
    },
  },

  title: {
    fontSize: '2.4rem',
    color: 'var(--text-color)',
  },

  labelIcon: {
    fontSize: '3.6rem',
    color: 'var(--text-color)',
  },

  forgotPw: {
    color: 'var(--title-color)',
    opacity: 0.65,
    fontWeight: 500,
    fontSize: '1.4rem',
    textAlign: 'right',

    '&:hover': {
      opacity: 1,
    },
  },

  icon: {
    fontSize: '1.8rem',
    color: 'var(--grey)',
    cursor: 'pointer',
  },

  visiblePw: {
    color: 'var(--primary-color)',
  },
});

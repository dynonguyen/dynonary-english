import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    paddingTop: '3.2rem',
    paddingBottom: '3.2rem',

    '& .active': {
      color: 'var(--secondary-color)',
    },
  },

  controlItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    fontSize: '1.6rem',
    color: 'var(--label-color)',
    cursor: 'pointer',
    transition: 'all 0.25s',
    minWidth: '10rem',

    '&:hover, &:active': {
      color: 'var(--text-color)',
    },
  },

  filterMenu: {
    backgroundColor: 'var(--bg-color-sec)',
  },

  tableWrap: {
    width: '100%',
    marginTop: '1.2rem',
  },

  table: {
    height: '100%',
    width: '100%',
    textAlign: 'left',
    color: 'var(--text-color)',
    fontSize: '1.5rem',
    borderSpacing: '0px',

    '& th': {
      borderBottom: 'solid 1px var(--border-color)',
    },

    '& td, & th': {
      paddingTop: '1.6rem',
      paddingBottom: '1.6rem',
      paddingLeft: '0.4rem',
      paddingRight: '0.4rem',
      cursor: 'pointer',
    },

    '& tr:nth-child(even)': {
      backgroundColor: 'var(--bg-color-accent)',
    },

    '& tbody tr': {
      transition: 'all 0.25s',

      '&:hover, &:active': {
        backgroundColor: 'var(--hover-color)',
      },
    },

    [theme.breakpoints.up('sm')]: {
      fontSize: '1.6rem',

      '& td, & th': {
        paddingLeft: '0.8rem',
        paddingRight: '0.8rem',
      },
    },
  },

  tableHeader: {
    color: 'var(--primary-color)',
    fontWeight: 700,
    borderBottom: 'solid 1px var(--border-color)',
  },
}));

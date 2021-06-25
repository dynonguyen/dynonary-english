import { makeStyles } from '@material-ui/core/styles';
import { cloudinaryImgOptimize } from 'helper';

export default makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '45% 55%',

    height: '100%',
    width: '100%',
    margin: '2.2rem auto 0',

    boxShadow: 'var(--box-shadow)',
    backgroundColor: 'var(--bg-color-sec)',
    borderRadius: 8,
    overflow: 'hidden',

    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: '4fr 6fr',
      gridTemplateRows: '1fr',

      width: '100%',
      margin: '0',
      maxHeight: '576px',

      borderTopLeftRadius: '64px',
      borderBottomRightRadius: '64px',
      borderTopRightRadius: 0,
      borderBottomLeftRadius: 0,
      position: 'relative',

      '&::after': {
        content: '""',
        width: 32,
        height: 32,
        backgroundColor: 'var(--bg-color-main)',
        position: 'absolute',
        right: '2.4rem',
        top: '2.4rem',
        borderRadius: '50%',
        boxShadow: '1px -1px 8px 0 rgba(0,0,0,0.25) inset',
      },
    },
  },

  picture: {
    backgroundImage: (props) =>
      `url("${cloudinaryImgOptimize(props.picture, -1, 576)}")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundColor: 'var(--bg-color-accent)',
  },

  content: {
    padding: '1.2rem 2.4rem',
    margin: '-0.6rem 0',

    '& > *': {
      margin: '0.6rem 0',
      textAlign: 'center',
    },
  },

  mean: {
    fontSize: '2.4rem',
    color: 'var(--primary-color)',
    fontWeight: 'bold',
    textTransform: 'capitalize',

    [theme.breakpoints.up('md')]: {
      fontSize: '3rem',
    },
  },

  word: {
    fontSize: '2.2rem',
    letterSpacing: '0.75px',
    color: 'var(--text-color)',
    textTransform: 'capitalize',
    [theme.breakpoints.up('md')]: {
      fontSize: '2.8rem',
    },
  },

  type: {
    fontSize: '1.6rem',
    color: 'var(--label-color)',
    [theme.breakpoints.up('md')]: {
      fontSize: '1.8rem',
    },
  },

  phonetic: {
    fontSize: '1.8rem',
    color: 'var(--phonetic-color)',
    letterSpacing: '1px',

    [theme.breakpoints.up('md')]: {
      fontSize: '2rem',
    },
  },

  example: {
    fontSize: '1.7rem',
    color: 'var(--text-color)',
    lineHeight: 1.5,

    [theme.breakpoints.up('md')]: {
      fontSize: '1.9rem',
    },
  },
}));

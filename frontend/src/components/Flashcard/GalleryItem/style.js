import { makeStyles } from '@material-ui/core/styles';
import { cloudinaryImgOptimize } from 'helper';

export default makeStyles((theme) => ({
  root: {
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,

      width: '100%',
      height: '100%',

      backgroundColor: 'rgba(0,0,0,0.35)',
      zIndex: 1,
    },

    '& .bg': {
      backgroundImage: (props) =>
        `url("${cloudinaryImgOptimize(props.picture, -1, 288)}")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',

      width: '100%',
      height: '100%',
      transition: 'all 0.45s',

      position: 'absolute',
      top: 0,
      left: 0,
    },

    '&:hover .bg': {
      transform: 'scale(1.1)',
    },
  },

  content: {
    zIndex: 2,
    padding: '0.8rem',
    '& > *': {
      textAlign: 'center',
      color: '#fff',
    },
  },

  word: {
    fontSize: '1.6rem',
    fontWeight: 500,
    letterSpacing: '1px',

    [theme.breakpoints.up('md')]: {
      fontSize: '2.2rem',
    },
  },

  phonetic: {
    fontSize: '1.4rem',
    letterSpacing: '1px',
    margin: '0.2rem 0',
    fontStyle: 'italic',

    [theme.breakpoints.up('md')]: {
      fontSize: '1.5rem',
    },
  },

  mean: {
    fontSize: '1.5rem',
    fontWeight: 500,

    [theme.breakpoints.up('md')]: {
      fontSize: '1.7rem',
    },
  },
}));

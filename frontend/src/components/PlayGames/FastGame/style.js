import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  wrapper: {
    width: '100vw',
    minHeight: '100vh',
    overflow: 'hidden',
  },

  bg: {
    zIndex: -1,
    position: 'absolute',
    backgroundImage:
      'url(https://res.cloudinary.com/dynonary/image/upload/v1628497463/dynonary/games/fast-game-bg_huk7ii.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    opacity: 0.8,
  },

  root: {
    height: '90vh',
    width: '100%',
    margin: 'auto',
    backgroundColor: 'var(--bg-color-sec)',
    borderRadius: '16px',
    border: 'solid 10px rgba(127,127,127,0.5)',
    overflow: 'hidden',
  },

  nTotal: {
    padding: '12px 0',
    fontSize: '1.6rem',
    letterSpacing: '1.5px',
  },

  title: {
    padding: '1.6rem',
    textAlign: 'center',
    position: 'relative',

    '& h1': {
      border: 'solid 5px rgba(127,127,127,0.5)',
      width: 'max-content',
      padding: '2.4rem',
      margin: 'auto',
      fontWeight: 500,
      borderRadius: '16px',
      color: 'var(--title-color)',
      fontSize: '2.4rem',
    },
  },

  goBackIcon: {
    position: 'absolute',
    left: '2.4rem',
    top: '50%',
    transform: 'translateY(-50%)',
    color: 'var(--label-color)',
    cursor: 'pointer',
  },

  topics: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(130px,1fr))',
    gap: '1.6rem',
    padding: '2.4rem',
    overflowY: 'auto',
    maxHeight: 'calc(100% - 9rem)',

    '&::-webkit-scrollbar': {
      width: '0px !important',
    },
  },

  topicItem: {
    minHeight: '130px',
    height: '100%',
    backgroundColor: 'var(--bg-color-accent)',
    borderRadius: '8px',
    cursor: 'pointer',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    transition: 'all 0.35s',
    '&:hover, &:active': {
      backgroundColor: 'var(--hover-color)',
    },
  },

  topicImg: {
    width: '5rem',
    height: '5rem',
    marginBottom: '12px',
  },

  topicTitle: {
    fontSize: '1.6rem',
    fontWeight: 400,
  },

  answerList: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3.2rem',
  },

  answerItem: {
    borderRadius: '12px',
    marginRight: '1.6rem',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.2rem',
    width: 80,
    height: 80,
    cursor: 'pointer',

    '& img': {
      width: '100%',
      height: '100%',
      transition: 'all .25s',

      '&:hover, &:active': {
        transform: 'scale(1.2)',
      },
    },

    [theme.breakpoints.up('sm')]: {
      width: 120,
      height: 120,
    },

    [theme.breakpoints.up('md')]: {
      width: 180,
      height: 180,
    },
  },

  timerWrap: {
    width: '80%',
    flexBasis: '64px',
    textAlign: 'center',
    border: 'solid 5px var(--grey)',
    margin: '0 auto 1.2rem',
    borderRadius: '12px',
    overflow: 'hidden',
    position: 'relative',
  },

  timer: {
    width: '100%',
    height: '100%',
    transition: 'width 0.5s',
    backgroundColor: 'var(--primary-color)',
    background:
      'linear-gradient(90deg, var(--primary-color) 0%, var(--secondary-color) 100%)',
  },

  timeStr: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    fontSize: '1.6rem',
    color: '#fff',
    fontWeight: 500,
    letterSpacing: '1px',
  },

  doneTitle: {
    fontSize: '5.2rem',
    color: 'var(--title-color)',
    marginBottom: '1.2rem',
  },

  doneResult: {
    fontSize: '2.4rem',
    color: 'var(--text-color)',
  },
}));

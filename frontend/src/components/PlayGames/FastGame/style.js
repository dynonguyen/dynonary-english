import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
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
  },

  selectTopic: {
    padding: '1.2rem 2.4rem',
    textAlign: 'center',

    '& h1': {
      border: 'solid 5px rgba(127,127,127,0.5)',
      width: 'max-content',
      padding: '1.6rem',
      margin: 'auto',
      fontWeight: 500,
      borderRadius: '16px',
      color: 'var(--title-color)',
    },
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
}));

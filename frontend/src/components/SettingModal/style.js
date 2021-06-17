import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  rootPaper: {
    backgroundColor: 'var(--bg-color-accent)',
    borderRadius: 'var(--border-radius)',
    width: '100%',
  },

  title: {
    padding: '1.4rem 2.4rem',
    color: 'var(--title-color)',
    fontWeight: 500,
    fontSize: '2.4rem',
  },

  content: {
    borderTop: 'solid 1px var(--input-border-color)',
    borderBottom: 'solid 1px var(--input-border-color)',
    backgroundColor: 'var(--bg-color-sec)',
    padding: '1.2rem 2.4rem',
  },

  contentItem: {
    padding: '1.6rem',
    borderRadius: 'var(--sm-border-radius)',
    border: 'solid 1px var(--input-border-color)',
  },

  contentLabel: {
    fontWeight: 500,
    fontSize: '1.6rem',
    marginBottom: '1.2rem',
  },

  actions: {
    padding: '1.2rem',
  },
}));

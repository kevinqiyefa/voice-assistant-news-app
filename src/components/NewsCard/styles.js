import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderBottom: '10px solid white',
  },
  activeCard: {
    borderBottom: '10px solid #22289a',
  },
  media: {
    height: 200,
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0.5rem 0.9rem',
  },

  title: {
    padding: '0 0.9rem',
    lineHeight: 1.3,
    fontSize: '1.2rem',
  },

  cardActions: {
    padding: '0 0.9rem 8px 0.9rem',
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

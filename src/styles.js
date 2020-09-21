import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appContainer: {
    padding: '3% 5%',
  },

  logoContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },

  infoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    padding: '3%',
    borderRadius: 10,
    color: 'white',
    backgroundColor: 'rgba(21, 101, 192)',
    margin: '0 12px',
    textAlign: 'center',
    height: '25vmin',
  },

  aiLogo: {
    height: '27vmin',
    margin: '1% 3% 3% 3%;',
  },
}));

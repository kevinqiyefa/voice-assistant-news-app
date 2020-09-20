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

  aiLogo: {
    height: '27vmin',
    borderRadius: '15px',
    margin: '3% 5%',
  },
}));

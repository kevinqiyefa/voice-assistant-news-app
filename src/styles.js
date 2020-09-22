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
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
      textAlign: 'center',
    },
  },

  infoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
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
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
      textAlign: 'center',
      width: '100%',
      height: 'initial',
      '&:nth-of-type(1)': {
        marginBottom: '12px',
      },
    },
  },

  aiLogo: {
    height: '27vmin',
    margin: '1% 3% 3% 3%;',
    [theme.breakpoints.down('xs')]: {
      height: '35vmin',
    },
  },
}));

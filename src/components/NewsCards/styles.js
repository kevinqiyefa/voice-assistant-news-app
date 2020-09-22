import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    width: '100%',
    margin: 0,
  },
  infoCard: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',

    [theme.breakpoints.down('xs')]: {
      paddingLeft: '0 !important',
      paddingRight: '0 !important',
    },
  },

  newsCard: {
    [theme.breakpoints.down('xs')]: {
      paddingLeft: '0 !important',
      paddingRight: '0 !important',
    },
  },

  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '45vh',
    maxHeight: 450,
    padding: '10%',
    borderRadius: 10,
    color: 'white',
  },
}));

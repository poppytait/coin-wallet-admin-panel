import './App.css';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import UserList from './components/userlist/UserList';
import WalletList from './components/walletlist/WalletList';
import TransactionPanel from './components/transactionPanel/TransactionPanel';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '1000px',
    margin: '0 auto',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const [chosenUser, setChosenUser] = useState();
  const [chosenWallet, setChosenWallet] = useState();
  const classes = useStyles();

  return (
    <div className="App">
      <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <UserList onSelectUser={setChosenUser} />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
          <WalletList onSelectWallet={setChosenWallet} user={chosenUser} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <TransactionPanel wallet={chosenWallet}/>
          </Paper>
        </Grid>
      </Grid>
    </div>
    </div>
  );
}

export default App;

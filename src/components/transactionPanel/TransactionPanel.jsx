import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import client from '../../client/CoinWalletApiClient';

export default function TransactionPanel(props) {
  const [destinationWalletId, setDestinationWalletId] = useState();
  const [amount, setAmount] = useState(0);
  const [alert, setAlert] = useState({
    open: false,
  });

  const handleClose = () => {
    setAlert({ open: false });
  };

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await client.postTransaction({
      sourceWalletId: props.wallet,
      destinationWalletId: destinationWalletId,
      amount: amount,
      sentAt: "2017-02-03T11:25:00Z",
      reference: "rent"
    });

    if (response.ok) {
      setAlert({
        message: "Success",
        severity: "success",
        open: true
      });
      setAmount(0);
    } else {
      const err = await response.json();
      setAlert({
        message: "Failed: " + err.message,
        severity: "error",
        open: true
      });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        required
        name="sourceWalletId" label="Sender Wallet ID" variant="outlined" value={props.wallet} InputProps={{
          readOnly: true,
        }}
        InputLabelProps={{
          shrink: true,
        }} />
      <TextField required name="destinationWalletId" label="Destination Wallet ID" variant="outlined" value={destinationWalletId} onInput={e => setDestinationWalletId(e.target.value)} />
      <TextField required name="amount" label="Amount" variant="outlined" value={amount} onInput={e => setAmount(e.target.value)} />
      <Button variant="contained" color="primary" type="submit">
        Send
        </Button>
      <Snackbar
        open={alert.open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity={alert.severity}>
          {alert.message}
        </Alert>
      </Snackbar>
    </form>
  )
}
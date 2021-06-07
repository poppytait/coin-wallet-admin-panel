import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import client from '../../client/CoinWalletApiClient';

export default function TransactionPanel(props) {
    const [destinationWalletId, setDestinationWalletId] = useState();
    const [amount, setAmount] = useState(0);

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
            console.log("Success");
          } else {
            console.log(await response.json());
          }
    }

    return (
    <form  onSubmit={handleSubmit}>
        <TextField 
        required
        name="sourceWalletId" label="Sender Wallet ID" variant="outlined" value={props.wallet}           InputProps={{
            readOnly: true,
          }}
          InputLabelProps={{
            shrink: true,
          }} />
        <TextField required name="destinationWalletId" label="Destination Wallet ID" variant="outlined" value={destinationWalletId} onInput={ e=>setDestinationWalletId(e.target.value)} />
        <TextField required name="amount" label="Amount" variant="outlined" value={amount} onInput={ e=>setAmount(e.target.value)} />


        <Button variant="contained" color="primary" type="submit">
            Primary
        </Button>

    </form>)
}
import React, { useState, useEffect } from 'react';
import client from '../../client/CoinWalletApiClient';
import List from '../list/List';

export default function WalletList(props) {
    const [wallets, setWallets] = useState([]);

    useEffect(() => {
        if (props.user) {
            client.getWallets(props.user).then((wallets) => setWallets(wallets));
        }
    }, [props.user]);

    const walletItems = wallets.map(wallet => (
        {
            id: wallet.id,
            primary: "Wallet ID: " + wallet.id,
            secondary: "Balance: " + wallet.balance + " ClearPay Coins",
        }
    ))

    return (
        <>
            <div>Wallet Details</div>
            <List
                items={walletItems}
                onClickItem={(id) => {
                    props.onSelectWallet(id);
                }}
            />
        </>
    )
}
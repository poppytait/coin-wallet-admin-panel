class CoinWalletApiClient {


    async getUsers() {
        return fetch("/users/")
            .then(response => response.json())
    }


    async getWallets(userId) {
        return fetch("/wallets/" + userId + "/")
            .then(response => response.json())
    }


    async postTransaction(transaction) {
        return fetch("/transactions/", {
            method: 'POST',
            body: JSON.stringify(transaction),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
          });
    }
}

const client = new CoinWalletApiClient();

export default client;
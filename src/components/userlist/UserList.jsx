import React, { useState, useEffect } from 'react';
import client from '../../client/CoinWalletApiClient';
import List from '../list/List';

export default function UserList(props) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        client.getUsers().then((users) => setUsers(users));
      }, []);

      const userItems = users.map(user => (
          {
              id: user.id,
              primary: user.firstName + " " + user.lastName,
              secondary: user.email,
          }
      ))
    
      return (
          <List 
            items={userItems}
            onClickItem={(id) => { 
                props.onSelectUser(id);
            }} 
            />
      )
}
import React from 'react';
import MaterialList from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default function List(props) {
    const listItems = props.items.map((item) => (          
    <ListItem 
        key={item.id} onClick={()=> {
            props.onClickItem(item.id);
        }

        }>
        <ListItemText
          primary={item.primary}
          secondary={item.secondary}
        />
      </ListItem>))

    return (
        <MaterialList>
            {listItems}
      </MaterialList>
    )
}
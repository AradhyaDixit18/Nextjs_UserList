import { List, ListItem, ListItemText, Paper } from '@mui/material';

const ItemList = ({ items }) => (
  <Paper sx={{ p: 2 }}>
    <List>
      {items.map(item => (
        <ListItem key={item.id} sx={{ '&:hover': { backgroundColor: '#f5f5f5' } }}>
          <ListItemText primary={item.name} secondary={item.email} />
        </ListItem>
      ))}
    </List>
  </Paper>
);

export default ItemList;

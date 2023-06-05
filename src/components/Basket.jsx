import { ShoppingBasket } from '@mui/icons-material';
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React from 'react';
import BasketItem from './BasketItem';

export default function Basket(props) {
    const {
        cartOpen,
        closeCart = Function.prototype,
        order = [],
        removeFromOrder
    } = props;

  return (
    <Drawer
    anchor='right'
    open={cartOpen}
    onClose={closeCart}
    >
        <List sx={{width: '500px'}}>
            <ListItem>
                <ListItemIcon>
                    <ShoppingBasket />
                </ListItemIcon>
                <ListItemText primary="Basket" variant="h6" />
            </ListItem>
            <Divider />

            {!order.length ? (
            <ListItem sx={{ fontSize: '19px',
            marginBottom: '1.5rem', marginLeft: '50px'}}>Your basket is empty!</ListItem>
            ) : (
                <>
                 {order.map((item) => (
                   <BasketItem key={item.name} removeFromOrder={removeFromOrder} {...item} />
                ))}
                <Divider />
                    <Typography sx={{fontWeight: 700, marginLeft: '50px'}}>
                        Total price: {' '}
                        {order.reduce((acc, item) => {
                            return acc + item.price * item.quantity;}, 0)}{' '}$
                    </Typography>
                </>
            )
        }
        </List>
    </Drawer>
  )
}

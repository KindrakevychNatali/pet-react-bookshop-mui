import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Grid, Button, Typography } from '@mui/material';
const GoodsItem = (props) => {
    const { name, price, setOrder, poster } = props;

    return (
        <Grid item xs={12} md={4} sx={{border: '1px solid lightblue', textAlign: 'center'}}>
               <Card>
                <CardMedia
                    image={poster}
                    title={name}
                    alt={name}
                    sx={{ height: 140 }}
                />
                <CardContent>
                    <Typography variant="h6" component="h5">{name}</Typography>
                    <Typography variant="body1">Price: {price} UAH</Typography>
                </CardContent>
                <CardActions>
                    <Button
                        variant='contained'
                        onClick={() =>
                            setOrder({
                                id: props.id,
                                name: props.name,
                                price: props.price,
                            })
                        }
                    >
                        Buy
                    </Button>
                   </CardActions>
            </Card>
        </Grid> 
    );
};

export default GoodsItem;
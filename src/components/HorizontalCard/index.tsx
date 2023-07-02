import React from 'react';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useAppDispatch } from '../../redux/hooks';
import { addToCart, decrementQuantity, incrementQuantity, removeToCart } from '../../redux/slices/cart.slice';
import { Add, AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';

interface CardHorizontalComponentProps {
  id: string | number;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

export const HorizontalCardComponent: React.FC<CardHorizontalComponentProps> = ({
  id,
  image,
  name,
  price,
  quantity,
}) => {
  const dispatch = useAppDispatch();
  const handleRemoveToCart = () => {
    dispatch(removeToCart({ id }));
  };

  const handleIncrement = () => {
    dispatch(incrementQuantity({ id }));
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity({ id }));
  };
  
  return (
    <Card sx={{ display: 'flex', my: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={image}
        alt="Rick and Morty"
      />
      <Grid container sx={{ mx: 1 }}>
        <Grid item xs={9}>
          <CardContent>
            <Typography variant="h4">{name}</Typography>
            <Divider />
            <Typography variant="h6">{price}</Typography>
            <Divider />
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:'center' }}>
              <IconButton onClick={handleIncrement}>
                <AddCircleOutline/>
              </IconButton>
              <Typography variant="h6" sx={{ mx: 1, textAlign:'center' }} >Quantity: {quantity}</Typography>
              <IconButton onClick={handleDecrement}>
                <RemoveCircleOutline />
              </IconButton>
            </Box>
          </CardContent>
        </Grid>
        <Grid item xs={2}>
          <CardActions>
            <IconButton onClick={handleRemoveToCart}>
              <CloseRoundedIcon />
            </IconButton>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
};
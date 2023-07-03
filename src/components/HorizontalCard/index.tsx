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
    <Card sx={{ display: 'flex', my: 2, alignItems: 'center' }}>
      <CardMedia
        component="img"
        sx={{ width: 151, height: 151, objectFit: 'cover', flexShrink: 0, borderRadius: '4px' }}
        image={image}
        alt={name}
      />
      <Box sx={{ flexGrow: 1, mx: 2 }}>
        <CardContent>
          <Typography variant="h5">{name}</Typography>
          <Divider sx={{ my: 1 }} />
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{price} USD</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', my: 2 }}>
            <IconButton onClick={handleDecrement} disabled={quantity === 1}>
              <RemoveCircleOutline />
            </IconButton>
            <Typography variant="body1" sx={{ mx: 1 }}>{quantity}</Typography>
            <IconButton onClick={handleIncrement}>
              <AddCircleOutline />
            </IconButton>
          </Box>
        </CardContent>
      </Box>
      <CardActions>
        <IconButton onClick={handleRemoveToCart}>
          <CloseRoundedIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

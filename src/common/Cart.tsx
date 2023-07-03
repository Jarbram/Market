import React from 'react';
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { HorizontalCardComponent } from '../components/HorizontalCard'; 
import { useAppSelector } from '../redux/hooks';

interface CartComponentProps {
  open: boolean;
  handleStateViewDrawer: () => void;
}

export const CartComponent: React.FC<CartComponentProps> = ({
  open,
  handleStateViewDrawer,
}) => {
  const items = useAppSelector((state) => state.cartReducer);

  const handleCheckout = () => {
    const totalPrice = items.reduce((acc, { price }) => acc + price, 0).toFixed(2);
    const message = `¡Hola! Estoy interesado en comprar los siguientes productos:%0A%0A`;
    const productsMessage = items
      .map(({ name, price }) => `- ${name}: $${price.toFixed(2)}`)
      .join('%0A');
    const totalPriceMessage = `%0A%0APrecio total: $${totalPrice}`;
    const finalMessage = message + productsMessage + totalPriceMessage;
    const url = `https://api.whatsapp.com/send?phone=992487774&text=${finalMessage}`;
    window.open(url, '_blank');
  };
  

  return (
    <Drawer anchor={'right'} open={open}>
      <Box sx={{ width: '25em', p: 2 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h5">Cart</Typography>
          <IconButton color="primary" onClick={() => handleStateViewDrawer()}>
            <CloseRoundedIcon />
          </IconButton>
        </Stack>
        <Divider sx={{ my: 1.5 }} />
        {items.length > 0
          ? items.map(({ id, image, name, price,quantity}) => (
              <HorizontalCardComponent
                key={id}
                id={id}
                image={image}
                name={name}
                price={price}
                quantity={quantity}
              />
            ))
          : 'Agrega productos al carrito'}
      </Box>
      <Divider />
      <Box sx={{ width: '25em', p: 2 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h5">Total</Typography>
          <Typography variant="h5">
            $
            {items
              .reduce((acc,{price}) => acc + price, 0)
              .toFixed(2)}
          </Typography>
        </Stack>
      </Box>

      <Button 
      variant="contained" 
      fullWidth
      onClick={handleCheckout}
      >
        Checkout
      </Button>

    </Drawer>
  );
};
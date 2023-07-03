import { ShoppingCartOutlined } from '@mui/icons-material';
import { AppBar, Badge, Box, Button, Container, Grid, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';
import { CartComponent } from './Cart';

export const Navbar: React.FC<{}> = () => {
  const navigate = useNavigate();
  const items = useAppSelector((state) => state.cartReducer);
  const [open, setOpen] = React.useState<boolean>(false);

  const handleStateViewDrawer = () => {
    setOpen((state) => !state);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Container maxWidth="xl">
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid
                item
                sx={{ cursor: 'pointer' }}
                onClick={() => navigate('/')}
              >
                <Typography variant="h6" sx={{ textAlign: 'center' }}>
                  Misa Store
                </Typography>
              </Grid>
              <Grid item>
                <IconButton
                  color="primary"
                  onClick={() => handleStateViewDrawer()}
                >
                  <Badge color="error" badgeContent={items.length}>
                    <ShoppingCartOutlined />
                  </Badge>
                </IconButton>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
      <CartComponent
        open={open}
        handleStateViewDrawer={handleStateViewDrawer}
      />
    </Box>
  );
};

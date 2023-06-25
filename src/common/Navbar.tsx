import { ShoppingCartOutlined } from '@mui/icons-material';
import { AppBar, Badge, Box, Button, Container, Grid, Icon, IconButton, Stack, Toolbar, Typography } from '@mui/material';
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
                <Grid item>
                  <Typography>Codrr</Typography>
                </Grid>
                <Grid item>
                  <Stack direction="row" spacing={2}>
                    <IconButton
                      color="primary"
                      onClick={() => handleStateViewDrawer()}
                    >
                      <Badge color="error" badgeContent={items.length}>
                        <ShoppingCartOutlined />
                      </Badge>
                    </IconButton>
                    <Button variant="contained" onClick={() => navigate('login')}>
                      Login
                    </Button>
                    <Button variant="outlined">Register</Button>
                  </Stack>
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
import React from 'react';
import { Box, Button, CircularProgress, Container, Grid, Pagination, Typography } from '@mui/material';
import { CardComponent, HeaderContainer } from '../../components';
import { getAllProducts } from '../../api/products';
import { Product } from './interface/product.interface';
import { CategoriesContainer } from '../../components/Categories';
import { styled } from '@mui/system';

const StyledGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));

export const HomePage: React.FC = () => {
  const [allProducts, setAllProducts] = React.useState<Product[] | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [page, setPage] = React.useState<number>(1);
  const [count, setCount] = React.useState<number>(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  React.useEffect(() => {
    setLoading(true);
    getAllProducts()
      .then((response) => {
        //setCount(response);
        setAllProducts(response);
        setTimeout(() => setLoading(false), 1000);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  return (
    <Container sx={{ mt: 6 }} maxWidth="xl">
      <HeaderContainer
        description="Descubre una amplia selección de productos al por mayor a precios imbatibles.¡Bienvenido! "
        element={<Button variant="contained" color="primary">Comprar ahora</Button>}
      />
      <CategoriesContainer />
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Typography variant="h6" sx={{ mb: 3, mt: 3, fontSize:'14px' }}>Todos los productos</Typography>
          <StyledGrid sx={{ my: 2 }} container spacing={3} direction="row">
            {allProducts?.map((product) => (
              <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                <CardComponent
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  description={product.description}
                  id={product.id}
                />
              </Grid>
            ))}
          </StyledGrid>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mb: 10 }}>
            <Pagination count={count} color="primary" sx={{ mt: 4 }} page={page} onChange={handleChange} />
          </Box>
        </>
      )}
    </Container>
  );
};

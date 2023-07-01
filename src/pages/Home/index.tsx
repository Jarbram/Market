import React from 'react';
import { Box, Button,  CircularProgress, Container, Grid, Pagination } from '@mui/material';
import { CardComponent, HeaderContainer } from '../../components';
import { getAllProducts } from '../../api/products';
import { Product } from './interface/product.interface';

export const HomePage: React.FC = () => {
  const [allProducts, setAllProducts] = React.useState<Product[] | null > (null)
  const [loading, setLoading] = React.useState<boolean>(true)
  const [page, setPage] = React.useState<number>(1)
  const [count, setCount] = React.useState<number>(1)

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  }

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
  }, [page])

    return(
        <Container sx={{mt:9}} maxWidth="xl">
        <HeaderContainer 
        title='Jarbram' 
        description='Practice with MUI and typescript'
        element={<Button variant='contained' color='primary'>Learn More</Button>}
        />
        {
          loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt:4 }}>
              <CircularProgress />
            </Box>
          ) :(
            <>
            <Grid sx={{my:2}} container spacing={3} direction="row" >
              {allProducts?.map((product) => (
              <Grid key={product.id} item xs={3}>
                <CardComponent 
                image={product.image}
                name={product.name}
                price={product.price}
                description={product.description}
                id={product.id}
                />
              </Grid>
              ))}
          </Grid>
          <Box sx={{width:'100%', display:'flex', justifyContent:'center', mb:10}}>
            <Pagination count={count} color="primary" sx={{mt:4}} page={page} onChange={handleChange} />
          </Box>
        </>
          )
        }
      </Container>
    )
}
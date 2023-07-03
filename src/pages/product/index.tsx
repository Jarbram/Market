
import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, CardActions, CircularProgress, Container, Grid, Typography } from '@mui/material';
import { Product } from './interface/product.interface';
import { getProductById } from '../../api/products';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addToCart } from '../../redux/slices/cart.slice';
import { setItem } from '../../utils/localStorage';



const ProductPage: React.FC = () => {
    const { id } = useParams();
    const [loading, setLoading] = React.useState<boolean>(true);
    const [product, setProduct] = React.useState <  Product | null  >(null);
    const[disabled,setDisabled] = React.useState(false);
    const dispatch = useAppDispatch();
    const handleAddToCart = () => {
        dispatch(addToCart({
            id : product!.id,
            name: product!.name,
            image: product!.image,
            price: product!.price,
            quantity:1
        }))
    }
    const itemExits = useAppSelector((state) => state.cartReducer);
    React.useEffect(() => {
        setDisabled(itemExits.some((item) => item.id === id))
        setItem('cart',itemExits)
    }, [itemExits,id])
    
    React.useEffect(() => {
        getProductById(id)
        .then((r) => {
            setProduct(r || null);
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [id]);
    return (
        <Box sx={{width:"100%"}}>
            <Container maxWidth="xl">
                
                    {loading ? (
                        <Box sx={{ display: 'flex', justifyContent: 'center', mt:4 }}>
                            <CircularProgress />
                        </Box>
                    ) : (
                        <Grid container columnSpacing={2} sx={{mt:15}}>
                            <Grid item xs={6} >
                                <Typography variant="h1" sx={{mb:2}}>
                                    {product!.name}
                                </Typography>
                                <Typography variant="h3" sx={{mb:2}}>
                                    {product!.price}
                                </Typography>
                                <Typography variant="h6" sx={{mb:2}}>
                                    {product!.description}
                                </Typography>
                                <CardActions
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                    mt: 14,
                                }}
                                >
                                    <Button size="medium" variant='outlined' disabled={disabled} onClick={handleAddToCart}>Add to Cart</Button>
                                </CardActions>
                            </Grid>
                            <Grid item xs={6}>
                                <img src={product!.image} alt={product?.name} style={{width:"100%", borderRadius:"0.5em"}} />
                            </Grid>
                        </Grid>
                    )}
            </Container>
        </Box>
    )
}

export default ProductPage
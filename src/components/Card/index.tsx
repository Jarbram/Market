import { Button, Card, CardActions, CardContent, CardMedia, Divider, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addToCart } from '../../redux/slices/cart.slice';
import { setItem } from '../../utils/localStorage';


type CardProps = {
    image: string;
    name: string;
    description: string;
    price:number;
    id : string;
}

export const CardComponent: React.FC<CardProps> = ({image,name,description,price,id}) => {
    let navigate = useNavigate();
    const dispatch = useAppDispatch();
    const handleAddToCart = () => {
        dispatch(addToCart({
            id,
            name,
            image,
            price,
            quantity:1
        }))
    }
    const[disabled,setDisabled] = React.useState(false);
    const itemExits = useAppSelector((state) => state.cartReducer);
    React.useEffect(() => {
        setDisabled(itemExits.some((item) => item.id === id))
        setItem('cart',itemExits)
    }, [itemExits,id])
    
    return (
        <Card >
            <CardMedia
                component="img"
                height="200"
                image={image}
                alt="green iguana"
            />
            <CardContent>
                <Typography variant='h6' sx={{mb:1.5}} >{name}</Typography>
                <Divider/>
                <Typography sx={{mt:1.5}}>{description}</Typography>
                <Typography sx={{mt:1.5}}>{price}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant='contained' fullWidth onClick={()=> navigate(`/character/${id}`)}>Learn More</Button>
                <Button size="small" variant='outlined' fullWidth disabled={disabled} onClick={handleAddToCart}>Add to Cart</Button>
            </CardActions>
        </Card>
    )
}
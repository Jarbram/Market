import { Button, Card, CardActions, CardContent, CardMedia, Divider, Typography } from '@mui/material';
import React from 'react';

type CardProps = {
    image: string;
    name: string;
    species: string;
    status: string;
}

export const CardComponent: React.FC<CardProps> = ({image,name,species,status}) => {
    return (
        <Card>
            <CardMedia
                component="img"
                height="140"
                image={image}
                alt="green iguana"
            />
            <CardContent>
                <Typography variant='h4' sx={{mb:1.5}} >{name}</Typography>
                <Divider/>
                <Typography sx={{mt:1.5}}>{species}</Typography>
                <Typography sx={{mt:1.5}}>{status}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant='contained' fullWidth>Learn More</Button>
            </CardActions>
        </Card>
    )
}
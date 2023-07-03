import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Category {
  name: string;
  image: string;
}

const categories: Category[] = [
  {
    name: 'MUEBLES',
    image:
      'https://images.pexels.com/photos/534172/pexels-photo-534172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'ELECTRODOMESTICOS',
    image:
      'https://images.pexels.com/photos/4993062/pexels-photo-4993062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'UTILES DEPORTIVOS',
    image:
      'https://images.pexels.com/photos/2820819/pexels-photo-2820819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

export const CategoriesContainer: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  if (isMobile) {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      adaptiveHeight: true,
      alignItems: 'center',
    };

    return (
      <Slider {...settings}>
        {categories.map((category) => (
          <Box
            key={category.name}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              my: 3,
            }}
          >
            <Typography variant="h6">{category.name}</Typography>
            <Link to={`/category/${category.name}`} style={{ textDecoration: 'none', color: 'white' }}>
              <img
                src={category.image}
                alt={category.name}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '10px',
                }}
              />
            </Link>
          </Box>
        ))}
      </Slider>
    );
  }

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        my: 3,
      }}
    >
      {categories.map((category) => (
        <Grid
          container
          key={category.name}
          spacing={2}
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            my: 3,
          }}
          item
          xs={12} sm={6} md={4} lg={4} xl={4}
        >
          <Grid item>
            <Link to={`/category/${category.name}`} style={{ textDecoration: 'none',color:'white' }}>
              <Typography variant="h6">{category.name}</Typography>
            </Link>
          </Grid>
          <Grid
            item
            sx={{
              width: '400px',
              height: '600px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Link to={`/category/${category.name}`} style={{ textDecoration: 'none' }}>
              <img
                src={category.image}
                alt={category.name}
                style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
              />
            </Link>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

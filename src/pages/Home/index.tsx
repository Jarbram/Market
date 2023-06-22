import React from 'react';
import { Box, Button, Card, Container, Grid } from '@mui/material';
import { CardComponent, HeaderContainer } from '../../components';
import { getCharacters } from '../../api/characters';
import { TypeCharacter } from './interface/character.interface';

export const HomePage: React.FC = () => {
  const [allCharacters, setAllCharacters] = React.useState<TypeCharacter[] | null > (null)

  React.useEffect(() => {
    getCharacters.getAll({ page: 1 })
      .then((response) => {
        console.log(response.data.results);
        setAllCharacters(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])

    return(
        <Container sx={{mt:9}} maxWidth="xl">
        <HeaderContainer 
        title='Jarbram' 
        description='hi everyone, this my first app with typescript'
        element={<Button variant='contained' color='primary'>Learn More</Button>}
        />
        <Grid container spacing={2} direction="row" >
          {allCharacters?.map((character) => (
            <Grid item xs={3}>
              <CardComponent
                key={character.id}
                image={character.image}
                name={character.name}
                species={character.species}
                status={character.status}
              />
          </Grid>
        ))}
        </Grid>
      </Container>
    )
}
import React from 'react';
import { Box, Button, Card, CircularProgress, Container, Grid, Pagination, Stack } from '@mui/material';
import { CardComponent, HeaderContainer } from '../../components';
import { getCharacters } from '../../api/characters';
import { TypeCharacter } from './interface/character.interface';

export const HomePage: React.FC = () => {
  const [allCharacters, setAllCharacters] = React.useState<TypeCharacter[] | null > (null)
  const [loading, setLoading] = React.useState<boolean>(true)
  const [page, setPage] = React.useState<number>(1)
  const [count, setCount] = React.useState<number>(1)

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  }

  React.useEffect(() => {
    setLoading(true);
    getCharacters.getAll({ page })
      .then((response) => {
        setCount(response.data.info.pages);
        setAllCharacters(response.data.results);
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
        description='hi everyone, this my first app with typescript'
        element={<Button variant='contained' color='primary'>Learn More</Button>}
        />
        {
          loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt:4 }}>
              <CircularProgress />
            </Box>
          ) :(
            <>
            <Grid sx={{my:2}} container spacing={2} direction="row" >
              {allCharacters?.map((character) => (
              <Grid key={character.id} item xs={3}>
                <CardComponent
                image={character.image}
                name={character.name}
                species={character.species}
                status={character.status}
                id={character.id}
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
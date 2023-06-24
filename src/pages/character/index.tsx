
import React from 'react';
import { useParams } from 'react-router-dom';
import { getCharacters } from '../../api/characters';
import { ICharacter } from './interface/character.interface';
import { Box, CircularProgress, Container, Grid, Typography } from '@mui/material';

export const CharacterPage: React.FC = () => {
    const { id } = useParams();
    const [loading, setLoading] = React.useState<boolean>(true);
    const [character, setCharacter] = React.useState <  ICharacter | null  >(null);
    
    React.useEffect(() => {
        getCharacters
        .getById({id})
        .then((r) => {
            setCharacter(r.data);
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);
    return (
        <Box sx={{width:"100%"}}>
            <Container maxWidth="xl">
                
                    {loading ? (
                        <Box sx={{ display: 'flex', justifyContent: 'center', mt:4 }}>
                            <CircularProgress />
                        </Box>
                    ) : (
                        <Grid container columnSpacing={2} sx={{mt:2}}>
                            <Grid item xs={6} >
                                <Typography variant="h1" sx={{mb:2}}>
                                    {character!.name}
                                </Typography>
                                <Typography variant="h3" sx={{mb:2}}>
                                    {character!.status}
                                </Typography>
                                <Typography variant="h6" sx={{mb:2}}>
                                    {character!.species}
                                </Typography>
                                <Typography variant="h6" sx={{mb:2}}>
                                    {character!.gender}
                                </Typography>
                                <Typography variant="h6" sx={{mb:2}}>
                                    {character!.origin.name}
                                </Typography>
                                <Typography variant="h6" sx={{mb:2}}>
                                    {character!.location.name}
                                </Typography>
                                <Typography variant="h6" sx={{mb:2}}>
                                    {character!.episode.length}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <img src={character!.image} alt={character?.name} style={{width:"100%", borderRadius:"0.5em"}} />
                            </Grid>
                        </Grid>
                    )}
            </Container>
        </Box>
    )
}
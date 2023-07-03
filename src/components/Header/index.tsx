import { Box, Divider, Grid, Typography } from '@mui/material';
import React from 'react';

type HeaderProps = {
    description: string;
    element?: React.ReactNode | null;
}

export const HeaderContainer: React.FC<HeaderProps> = ({description,element}) => {
    return (
        <div>
        <Box
        sx={{width: '100%', height: '350px'}}
        >
            <Grid 
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{height: '100%'}}
            >
                <Grid item xl={5}>
                    <Grid 
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={{height: '100%'}}
                    >
                        <Grid item>
                            <Typography
                            variant="h6"
                            sx={{textAlign: 'center', color: 'white'}}
                            >{description}</Typography>
                        </Grid  >
                        {element !== undefined && <Grid item sx={{mt:4}}>{element}</Grid>}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
        <Divider />
        </div>
    )
}
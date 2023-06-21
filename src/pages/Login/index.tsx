import React from 'react';
import { Box, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import { UseNotification } from '../../context/notification.context';
import { LoginValidate } from '../../utils/validateForm';
type LoginType = {
  email: string,
  password: string
}

export const LoginPage: React.FC = () => {
  const {getError,getSuccess} = UseNotification()



  const [loginData, setLoginData] = React.useState<LoginType>({
    email: '',
    password: '',
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    LoginValidate.validate(loginData).then((data) => {
    getSuccess(JSON.stringify(loginData))
    }).catch((err) => {
      getError(err.message)
    }
    )
  }

    return(
        <Container  maxWidth="sm">
          <Grid 
          container 
          direction="column" 
          justifyContent="center"
          alignItems="center"
          sx={{minHeight:"100vh"}}
          >
            <Grid>
              <Paper sx={{p:"1.2em", borderRadius:"0.5em"}}>
                <Typography 
                variant="h4"
                sx={{mt:1,mb:1}}
                >
                  Iniciar Sesión
                </Typography>
                <Box component="form" onSubmit={handleSubmit} >
                  <TextField 
                  fullWidth 
                  label="Email" 
                  name='email'
                  value={loginData.email}
                  onChange={handleChange}
                  sx={{mt:2,mb:2}} 
                  type='email'
                  margin='normal'
                  />
                  <TextField 
                  fullWidth 
                  label="Password" 
                  name='password'
                  value={loginData.password}
                  onChange={handleChange}
                  sx={{mt:1.5,mb:1.5}} 
                  type="password"
                  margin='normal'
                  />
                  <Button 
                  fullWidth 
                  type='submit' 
                  variant="contained" 
                  sx={{mt:1.5,mb:3}}
                  >Iniciar Sesión</Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>
      </Container>
    )
}
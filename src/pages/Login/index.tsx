import React from 'react';
import { Box, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import { UseNotification } from '../../context/notification.context';
import { LoginValidate } from '../../utils/validateForm';
import { useFormik } from 'formik';

type LoginType = {
  email: string,
  password: string
}

export const LoginPage: React.FC = () => {
const { getSuccess } = UseNotification();
const formik = useFormik<LoginType>({
  initialValues: {
    email: '',
    password: ''
  },
  validationSchema: LoginValidate,
  onSubmit: (values : LoginType) => {
  getSuccess(JSON.stringify(values))
  },
})

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
                <Box component="form" onSubmit={formik.handleSubmit} >
                  <TextField 
                  fullWidth 
                  label="Email" 
                  name='email'
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  sx={{mt:2,mb:2}} 
                  type='email'
                  margin='normal'
                  />
                  <TextField 
                  fullWidth 
                  label="Password" 
                  name='password'
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
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
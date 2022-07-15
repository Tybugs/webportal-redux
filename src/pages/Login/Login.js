import React from 'react'
import {
  Link
} from "react-router-dom";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { sizing } from '@mui/system';


import logo from '../../assets/jc-logo.png';
import logobg from '../../assets/jc-bg.png';

import { SET_ERRORS } from '../../redux/actions/types';

import { login } from '../../redux/actions/auth.action';

const Login = ({history}) => {
  const dispatch = useDispatch();
  const { errors, loading } = useSelector(state => state.uiReducer);
  const [values, setValues] = useState({});

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
    dispatch({ type: SET_ERRORS, payload: { ...errors, [prop]: ""}})
  };

  const onSubmit =  (e) => {
    e.preventDefault()
    console.log(values) 
    dispatch(login(values, history));
  };

  console.log(loading)
  console.log(errors)
  console.log(values)


  //snackbar function
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };



  const theme = createTheme();

 
  return (
    <ThemeProvider theme={theme}>
    <Grid container component="main" sx={{ float: 'right', width: '80%', mt: 5}}>
        <CssBaseline />
      <Grid
          item
          sm={3}
          md={6}
          sx={{
            backgroundImage: `url(${logobg})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[30] : t.palette.grey[200],
              backgroundSize: '150%',
          }}

        />
          

        <Grid item xs={6} sm={3} md={5} component={Paper} elevation={6} square 
        sx={{ 
          backgroundImage: `url(${logo})`,
          backgroundSize: '15%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top',
          mb: 5, 
          mt: 2
        }}
        >
        <Box
           sx={{
             my: 3,
             mx: 2,
             display: 'flex',
             flexDirection: 'column',
             alignItems: 'center',
           }}
         >
          <Typography component="body2" variant="h4" sx={{ mb: 1, mt: 10 }}>
            Welcome
          </Typography>
          <Typography component="body2" variant="body2">
            Sign in to continue
          </Typography>
          <Box component="form" onSubmit={onSubmit} sx={{ mt: 1}}>
            <TextField
              fullWidth
              margin='dense'
              size='small'
              onChange={handleChange('email_address')}
              defaultValue={values.email_address}
              label="Email Address"
              helperText={errors.email_address}
              error={errors.email_address ? true : false }
            />
            <TextField 
              fullWidth
              size='small'
              margin='dense'
              type="password"
              label="Password"
              onChange={handleChange('password')}
              defaultValue={values.password}
              helperText={errors.password}
              error={errors.password ? true : false }
            />
            <Grid container>
              <Grid item xs sx={{ mt: 1, mb: 2, textAlign: 'right', textDecoration: 'none' }}>
                <Link to="/forgot"  variant="body2">
                  Forgot password?
                </Link>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="success"
              sx={{ mt: 1 }}
            >
                  Sign In
                  
            </Button>
              <Button
              fullWidth
              variant="outlined"
              color="success"
              sx={{ mt: 1, mb: 1}}
            >
              Register                  
            </Button>
              <Typography component="body2"  sx={{ mt: 2, ml: 6, textAlign: 'center'}} >
                  By signing in, you agree to our <Link to="/"  color="palette.success.light"> Terms and Condition </Link>and 
                  <Link to="/" sx={{ textDecoration: 'none' }} variant="sucpalette.success.lightcess"> Privacy Policy. </Link>
              </Typography>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
    </ThemeProvider>
  );
}

export default Login;

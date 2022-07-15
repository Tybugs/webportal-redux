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
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import logo from '../../assets/jc-logo.png';
import logobg from '../../assets/jc-bg.png';

import { SET_ERRORS } from '../../redux/actions/types';

import { login } from '../../redux/actions/auth.action';

const Forgot = ({history}) => {
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
        >  <Box
        sx={{
          my: 3,
          mx: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
          <Typography component="body2" variant="h6" sx={{ mb: 1, mt: 10, fontWeight: 500 }}>
            Forgot your password?
          </Typography>
          <Typography component="body2" variant="body1">
            Enter your registered email below to received password reset code 
          </Typography>
          <Box component="form" onSubmit={onSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="dense"
              fullWidth
              size="small"
              onChange={handleChange('email_address')}
              defaultValue={values.email_address}
              label="Email Address"
              helperText={errors.email_address}
              error={errors.email_address ? true : false } 
            />
            <Button
              type="submit"
              size='small'
              disabled={loading}
              fullWidth
              variant="contained"
              color="success"
              sx={{ mt: 3 }}
            >
                  Submit
                  
            </Button>
            <Link to="/login">
                <Button
                  fullWidth
                  size="small"
                  variant="outlined"
                  color="success"
                  sx={{ mt: 1, mb: 1, textDecoration: 'none' }}
                >
                  Back to Login                 
                </Button>
            </Link>
      
              <Typography component="body2"  sx={{ mt: 3, ml: 6, textAlign: 'center' }} >
                  <Link to="/" variant="outlined" color="link"> Terms and Condition </Link>
              </Typography>
              <Typography component="body2"  sx={{ mt: 3, ml: 6, textAlign: 'center' }} >
                  <Link to="/" variant="outlined" color="link"> Privacy Policy </Link>
              </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
    </ThemeProvider>
  );
}

export default Forgot;
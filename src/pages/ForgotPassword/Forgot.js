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

import logo from '../../assets/jc-logo.png';
import logobg from '../../assets/jc-bg.jpg';

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


  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
    <Grid container component="main" sx={{  ml: '-10px', mt: '-5px'}}>
        <CssBaseline />
      <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${logobg})`,
            backgroundRepeat: 'no-repeat',
              backgroundSize: '115%',
              backgroundPosition: 'center',
          }}

        />
          

        <Grid item xs={10} sm={8} md={5} component={Paper} elevation={3} square 
        sx={{ 
          backgroundImage: `url(${logo})`,
          backgroundSize: '20%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top',
          mb: 3, 
          mt: 2
        }}
        >
        <Box
           sx={{
             my: 6,
             mx: 8,
             display: 'flex',
             flexDirection: 'column',
             alignItems: 'center',
           }}
         >
          <Typography component="body1" variant="h6" sx={{ mb: 1, mt: 15 }}>
            Forgot your password?
          </Typography>
          <Typography component="body2" variant="body2">
            Enter your registered email below to received password reset code 
          </Typography>
          <Box component="form" onSubmit={onSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              onChange={handleChange('email_address')}
              defaultValue={values.email_address}
              label="Email Address"
              helperText={errors.email_address}
              error={errors.email_address ? true : false } 
            />
            <Button
              type="submit"
              disabled={loading}
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 1 }}
            >
                  Submit
                  
            </Button>
            {/* </Link> */}
              <Button
              fullWidth
              variant="outlined"
              color="primary"
              sx={{ mt: 1, mb: 1}}
            >
              Back to Login                 
            </Button>
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

export default Login;

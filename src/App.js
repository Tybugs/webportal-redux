import React, { useState, useEffect } from "react";

import logo from './logo.svg';
import './App.css';
import {
  Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import here your route components
import Login from './pages/Login/Login'
import Forgot from './pages/ForgotPassword/Forgot'
import Dashboard from './pages/Dashboard/Dashboard' 
import Verification from './pages/ForgotPassword/Verification'
import Dashboardv1 from './pages/Dashboardv1/Dashboardv1';
import { history } from './helpers/history'

import { useSelector } from 'react-redux';


const theme = createTheme();




export default function App() {
  const { authUser, loadUser } = useSelector((state) => state.authReducer);
  
  console.log(authUser)






const RestrictedRoute = ({ component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        authUser ? (
          React.createElement(component, props)
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};




function PublicRoute({ component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authUser ? (
          <Redirect
            to={{
              pathname: "/dashboard",
              state: {
                from: props.location,
              },
            }}
          />
        ) : (
          React.createElement(component, props)
        )
      }
    />
  );
}








  return (
  <Router history={history}>
    <ThemeProvider 
      theme={theme}
    >
              {authUser && <Redirect to="/dashboard" />}
      <Switch>

            <RestrictedRoute exact path="/dashboard" component={Dashboard}/>
            <PublicRoute path="/login" component={Login} />
            <PublicRoute path="/forgot" component={Forgot}/>
            <PublicRoute path="/verification" component={Verification}/>
            <Route path="/" render={() => <Redirect to="/dashboard" />} />

      </Switch>
    </ThemeProvider>
</Router>

  )
}
import { SEND_FORGET_PASSWORD_EMAIL, UPDATE_AUTH_USER, UPDATE_LOAD_USER, SET_MESSAGE, LOGIN, SET_ERRORS, STOP_LOADING, SET_LOADING, CLEAR_ERRORS,
 } from './types';

import { validateLoginData } from '../../utils/validators'

export const setAuthUser = user => {
  console.log('DD');
  return dispatch => {
    dispatch({
      type: UPDATE_AUTH_USER,
      payload: user,
    });
  };
};

export const updateLoadUser = loading => {
  console.log('DIDA');

  return dispatch => {
    dispatch({
      type: UPDATE_LOAD_USER,
      payload: loading,
    });
  };
};

export const setForgetPassMailSent = status => {
  return dispatch => {
    dispatch({
      type: SEND_FORGET_PASSWORD_EMAIL,
      payload: status,
    });
  };
};


export const login = (values, history) => (dispatch) => {
  dispatch({
    type: SET_LOADING
  });

  dispatch({
    type: CLEAR_ERRORS,
  })

  let { errors, valid } = validateLoginData(values) 
  if(!valid) {
    dispatch({
      type: SET_ERRORS,
      payload: errors
    })
  } else { 

    localStorage.setItem('user', { id: 420, name: 'Jaybee' })

    dispatch({
      type: UPDATE_AUTH_USER,
      payload: { id: 420, name: 'Jaybee' }
    });
    history.push('/')
  }
    
    setTimeout(() => {
      dispatch({
        type: STOP_LOADING
      })
    }, 3000)


    
  console.log(errors)
  console.log(valid)
};





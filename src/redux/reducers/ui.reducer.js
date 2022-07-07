import { SET_ERRORS, CLEAR_ERRORS, SET_LOADING, STOP_LOADING, SEND_FORGET_PASSWORD_EMAIL } from '../actions/types';

const INIT_STATE = {
    errors: {},
    loading: false,
    setForgetPassMailSent: false,
};

export default function (state = INIT_STATE, action) {
    const { payload } = action
  switch (action.type) {
    
      
    case SET_ERRORS: 
    return { ...state, errors: payload }

      
    case CLEAR_ERRORS: 
    return { ...state, errors: {} }
      
      case SET_LOADING: 
         return { ...state, loading: true }

      case STOP_LOADING: 
         return { ...state, loading: false }

      case SEND_FORGET_PASSWORD_EMAIL: {
          return { ...state, send_forget_password_email: action.payload, };
        }


      default:
      return state;
  }
};

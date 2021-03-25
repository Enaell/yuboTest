import {shuffle, sample} from 'underscore';
import theme from '../theme';
import { combineReducers } from 'redux';

import counterpart from 'counterpart';

// general

const setTheme = (state, theme) => ({ ...state, ...theme});

const initialThemeState = {...theme};

const themeReducer = (state = initialThemeState, action) => {
  switch (action.type){
    case 'SET_THEME':
      return setTheme(state, action.payload);
    default: 
      return state;
  }
}


// user

const login = (state, user) => { 
  return ({ ...state, ...user });
};

const logout = () => ({});

const logState = (state) => {
  console.log(state)
  return state;
}

const initialUserState = {};

const userReducer = (state = initialUserState, action) => {
  switch (action.type){
    case 'LOGIN':
      return login(state, action.payload);
    case 'LOGOUT':
      return logout(state);
    case 'LOG_STATE':
      return logState(state);
    default: 
      return state;
  }
} 


// nav snackbar

const toggleNavSnackbar = state => ({ ...state, open: !state.open });

const setnavSnackbar = (state, variant, message) => ({ ...state, variant, message });

const initialNavSnackbarState = {
  open: false,
  variant: 'success',
  message: 'Success !'
}

const navSnackbarReducer = (state = initialNavSnackbarState, action) => {
  switch (action.type) {
    case 'TOGGLE_NAV_SNACKBAR':
      return toggleNavSnackbar(state);
    case 'SET_NAV_SNACKBAR':
      return setnavSnackbar(state, action.payload.variant, action.payload.message);
    default: 
      return state;
  }
}


const reducer = combineReducers({
  user: userReducer,
  navSnackBar: navSnackbarReducer,
  theme: themeReducer,
})

export default reducer;
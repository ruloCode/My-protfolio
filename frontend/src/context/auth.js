import React, { createContext, useReducer } from 'react';
import jwtDecode from 'jwt-decode';

// our initial contextx values
const initialState = {
  user: null,
};
// check for JWT token
if (localStorage.getItem('jwtToken')) {
  const decodedToken = jwtDecode(localStorage.getItem('jwtToken'));
  // check expired token
  if (decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem('jwtToken');
  } else {
    // set user data
    initialState.user = decodedToken;
  }
}
// out context
const AuthContext = createContext({
  user: null,
  login: (userData) => {},
  logout: () => {},
});

// our Reducers
function authReducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}

// our provider or global state
function AuthProvider(props) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Login function action
  const login = (userData) => {
    localStorage.setItem('jwtToken', userData.token);
    dispatch({
      type: 'LOGIN',
      payload: userData,
    });
  };

  // logout function action
  const logout = () => {
    localStorage.removeItem('jwtToken');
    dispatch({
      type: 'LOGOUT',
    });
  };

  return (
    <AuthContext.Provider
      value={{ user: state.user, login, logout }}
      {...props}
    />
  );
}

export { AuthContext, AuthProvider };

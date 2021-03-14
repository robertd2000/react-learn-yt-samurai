import { stopSubmit } from 'redux-form';
import { authAPI } from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data,
      };
    }

    default:
      return state;
  }
};

export const setUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  data: {
    userId,
    email,
    login,
    isAuth,
  },
});

export const authThunc = () => (dispatch) => {
  authAPI.auth().then((data) => {
    if (data.resultCode === 0) {
      let { login, id, email } = data.data;
      dispatch(setUserData(id, email, login, true));
    }
  });
};

export const authLogin = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then((data) => {
    if (data.resultCode === 0) {
      dispatch(authThunc());
      //   let { login, id, email } = data;
      // dispatch(setUserData(id, email, login));
    } else {
      let message = data.messages.length > 0 ? data.messages[0] : 'Some error';
      let action = stopSubmit('login', { _error: message });
      dispatch(action);
    }

    console.log(data);
  });
};

export const logout = () => (dispatch) => {
  authAPI.logout().then((data) => {
    if (data.resultCode === 0) {
      dispatch(setUserData(null, null, null, false));
    }
  });
};

export default authReducer;

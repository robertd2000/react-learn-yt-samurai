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
        isAuth: true,
      };
    }

    default:
      return state;
  }
};

export const setUserData = (userId, email, login) => ({
  type: SET_USER_DATA,
  data: {
    userId,
    email,
    login,
  },
});

export const authThunc = () => (dispatch) => {
  authAPI.auth().then((data) => {
    if (data.resultCode === 0) {
      let { login, id, email } = data.data;
      dispatch(setUserData(id, email, login));
    }
  });
};

export const authLogin = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then((data) => {
    let { login, id, email } = data.data;
    dispatch(setUserData(id, email, login));
    console.log(data);
  });
};

export default authReducer;

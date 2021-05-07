import { authThunc } from '../redux/authReducer';

const SET_INITIALIZED = 'SET_INITIALIZED';

const initialState = {
  initialized: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};

export const initializingSuccess = () => ({
  type: SET_INITIALIZED,
});

export const initializeApp = () => (dispatch) => {
  const promise = dispatch(authThunc());
  promise.then(() => {
    dispatch(initializingSuccess());
  });
};

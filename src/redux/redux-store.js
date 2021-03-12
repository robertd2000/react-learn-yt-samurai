import { applyMiddleware, combineReducers, createStore } from 'redux';
import authReducer from './authReducer';
import { dialogReducer } from './dialogsReducer';
import { profileReducer } from './profileReducer';
import { sitebarReducer } from './sitebarReducer';
import { userReducer } from './usersReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogReducer,
  sitebar: sitebarReducer,
  usersPage: userReducer,
  auth: authReducer,
  form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

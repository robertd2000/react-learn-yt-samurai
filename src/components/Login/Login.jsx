import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { reduxForm } from 'redux-form';
import { authLogin } from '../../redux/authReducer';
import { LoginForm } from './LoginForm';

const Login = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const onSubmit = (formData) => {
    console.log(formData);
    const { login, password, rememberMe } = formData;

    dispatch(authLogin(login, password, rememberMe));
  };

  if (isAuth) {
    return <Redirect to={'/profile'} />;
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm);

export default Login;

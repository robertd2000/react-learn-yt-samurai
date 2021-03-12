import { Field } from 'redux-form';

export const LoginForm = (props) => {
  return (
    <form action="" onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder="login" name={'login'} component={'input'} />
      </div>
      <div>
        <Field placeholder="password" name={'password'} component={'input'} />
      </div>
      <div>
        <Field type="checkbox" name={'rememberMe'} component={'input'} />{' '}
        remember me
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

import { Field } from 'redux-form';
import { requiredField } from '../../utils/validators/validators';
import { Input } from '../common/DormControls/FormControls';
import s from '../common/DormControls/FormControls.module.css';

export const LoginForm = (props) => {
  return (
    <form action="" onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder="login"
          name={'login'}
          component={Input}
          validate={[requiredField]}
        />
      </div>
      <div>
        <Field
          placeholder="password"
          name={'password'}
          type="password"
          component={Input}
          validate={[requiredField]}
        />
      </div>
      <div>
        <Field type="checkbox" name={'rememberMe'} component={Input} /> remember
        me
      </div>
      {props.error && <div className={s.formSummaryError}>{props.error}</div>}
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

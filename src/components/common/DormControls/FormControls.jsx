import s from './FormControls.module.css';

export const FormControl = ({ input, meta, child, ...props }) => {
  const hasError = meta.error && meta.touched;

  return (
    <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
      <div>{props.children}</div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const TextArea = (props) => {
  return (
    <FormControl {...props}>
      <textarea {...props.input} {...props} />
    </FormControl>
  );
};

export const Input = (props) => {
  return (
    <FormControl {...props}>
      <input {...props.input} {...props} />
    </FormControl>
  );
};

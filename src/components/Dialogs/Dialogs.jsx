import React from 'react';
import { Redirect } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Messages/MessageItem';

const Dialogs = ({ messagesPage, sendMessage, isAuth }) => {
  const { dialogs, messages } = messagesPage;
  let dialogsElements = dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />
  ));

  let messagesElements = messages.map((message) => (
    <Message message={message.message} id={message.id} key={message.id} />
  ));

  const onSubmit = (dataForm) => {
    sendMessage(dataForm.text);
  };

  if (!isAuth) {
    return <Redirect to="/login" />;
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>{dialogsElements}</div>

      <div className={s.messages}>{messagesElements}</div>
      <div>
        <DialogFormReducer onSubmit={onSubmit} />
      </div>
    </div>
  );
};

const DialogForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        placeholder="Enter your message"
        name="text"
        component={'textarea'}
      />
      <button>Add message</button>
    </form>
  );
};

const DialogFormReducer = reduxForm({
  form: 'dialog',
})(DialogForm);

export default Dialogs;

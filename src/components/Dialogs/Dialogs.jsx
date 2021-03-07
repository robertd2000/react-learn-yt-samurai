import React from 'react';
import { Redirect } from 'react-router';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Messages/MessageItem';

const Dialogs = ({messagesPage, sendMessage, inputHandler, isAuth}) => {
    const {dialogs, messages, newMessageText} = messagesPage
    let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />)

    let messagesElements = messages.map(message => <Message message={message.message} id={message.id} key={message.id} />)

    const addMessageHandler  = () => {
        sendMessage()
    }

    const onInputHandler = (e) => {
        let text = e.target.value
        inputHandler(text)
    }

    if (!isAuth) {
        return <Redirect to='/login' />
    }

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>

            
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea 
                    onChange={onInputHandler}
                    placeholder='Enter your message'
                    value={newMessageText}></textarea>
                <button onClick={addMessageHandler} >Add message</button>
            </div>
            
        </div>
    )
}

export default Dialogs
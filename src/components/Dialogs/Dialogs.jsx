import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Messages/MessageItem';
import { addMessage, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';

const Dialogs = ({state, dispatch}) => {
    const {dialogs, messages, newMessageText} = state
    let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let messagesElements = messages.map(message => <Message message={message.message} id={message.id} />)

    const addMessageHandler  = () => {
        
        dispatch(addMessage())
    }

    const inputHandler = (e) => {
        let text = e.target.value
        dispatch(updateNewMessageTextActionCreator(text))
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
                    onChange={inputHandler}
                    placeholder='Enter your message'
                    value={newMessageText}></textarea>
                <button onClick={addMessageHandler} >Add message</button>
            </div>
            
        </div>
    )
}

export default Dialogs
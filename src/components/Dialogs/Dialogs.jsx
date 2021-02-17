import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Messages/MessageItem';
import { addDialog, updateNewDialogTextActionCreator } from '../../redux/state';

const Dialogs = ({state, dispatch}) => {
    const {dialogs, messages, newDialogsText} = state
    let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let messagesElements = messages.map(message => <Message message={message.message} id={message.id} />)

    let mesageItem = React.createRef()
    const addMessage = () => {
        
        dispatch(addDialog())
    }

    const inputHandler = () => {
        let text = mesageItem.current.value
        dispatch(updateNewDialogTextActionCreator(text))
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
                    ref={mesageItem}
                    value={newDialogsText}></textarea>
                <button onClick={addMessage} >Add message</button>
            </div>
            
        </div>
    )
}

export default Dialogs
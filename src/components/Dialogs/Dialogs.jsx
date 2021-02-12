import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Messages/MessageItem';


const Dialogs = ({state}) => {
    const {dialogs, messages} = state
    let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let messagesElements = messages.map(message => <Message message={message.message} id={message.id} />)

    let mesageItem = React.createRef()
    const addMessage = () => {
        let text = mesageItem.current.value
        alert(text)
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
                <textarea ref={mesageItem}></textarea>
                <button onClick={addMessage} >Add message</button>
            </div>
            
        </div>
    )
}

export default Dialogs
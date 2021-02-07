import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>  
        </div>
    )
}

const Message = props => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Jonathan'},
        {id: 2, name: 'Joseph'},
        {id: 3, name: 'Dio'},
        {id: 4, name: 'Jotaro'},
        {id: 5, name: 'Josuke'},

    ]

    let dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'Hi'},
        {id: 4, message: 'Hi'},
        {id: 5, message: 'Hi'},
    ]

    let messagesElements = messagesData.map(message => <Message name={message.message} id={message.id} />)

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>

            
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs
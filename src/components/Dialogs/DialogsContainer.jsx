import React from 'react';
import { addMessage, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = ({store}) => {
    const state = store.getState().messagesPage
    
    const addMessageHandler  = () => {
        
        store.dispatch(addMessage())
    }

    const inputHandler = (text) => {
        store.dispatch(updateNewMessageTextActionCreator(text))
    }
    return (
        <Dialogs 
            inputHandler={inputHandler} 
            sendMessage={addMessageHandler}
            state={state} />
    )
}

export default DialogsContainer
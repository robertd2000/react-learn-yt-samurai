import React from 'react';
import { connect } from 'react-redux';
import { addMessage, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';


const mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        inputHandler: (text) => {
            dispatch(updateNewMessageTextActionCreator(text))
        },
        sendMessage: () => {
            dispatch(addMessage())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
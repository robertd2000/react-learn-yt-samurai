const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

export const dialogReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 11,
                message: state.newMessageText
            }
    
            state.messages.push(newMessage)
            state.newMessageText = ''
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newDialogText
        default:
            return state;
    }
}

export const addMessage = () => ({
    type: ADD_MESSAGE
})

export const updateNewMessageTextActionCreator = text => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newDialogText: text
})

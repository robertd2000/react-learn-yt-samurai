const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

const initialState = {
    dialogs: [
        {id: 1, name: 'Jonathan'},
        {id: 2, name: 'Joseph'},
        {id: 3, name: 'Dio'},
        {id: 4, name: 'Jotaro'},
        {id: 5, name: 'Josuke'},
        {id: 6, name: 'Jorno'},
        {id: 7, name: 'Kars'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'Hi'},
        {id: 4, message: 'Hi'},
        {id: 5, message: 'Hi'},
        {id: 6, message: 'Yo'},
        {id: 7, message: 'Yo'},
        {id: 8, message: 'Yo'},
        {id: 9, message: 'Yo'},
    ],
    newMessageText: '',
}

export const dialogReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 11,
                message: state.newMessageText
            }
            state.newMessageText = ''
            state.messages.push(newMessage)
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newDialogText
            return state
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

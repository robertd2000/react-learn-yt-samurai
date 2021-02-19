const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi', likesCount: 12},
                {id: 2, message: 'Hello', likesCount: 11},
            ],
            newPostText: 'IT'
        },
        messagesPage: {
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
        },
        sitebar: {
            friends: [
                {id: 1, name: 'Robert'},
                {id: 2, name: 'Dio'},
                {id: 3, name: 'Jotaro'},
            ]
        }
    },

    _callSubscriber() {
        console.log('state');
    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
        
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newPostText
            this._callSubscriber(this._state)
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 11,
                message: this._state.messagesPage.newMessageText
            }

            this._state.messagesPage.messages.push(newMessage)
            this._state.messagesPage.newMessageText = ''
            console.log(this._state.messagesPage.messages);
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.messagesPage.newMessageText = action.newDialogText
            this._callSubscriber(this._state)
        }
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST
})

export const updateNewPostTextActionCreator = text => ({
    type: UPDATE_NEW_POST_TEXT,
    newPostText: text
})

export const addMessage = () => ({
    type: ADD_MESSAGE
})

export const updateNewMessageTextActionCreator = text => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newDialogText: text
})

export default store
window.store = store
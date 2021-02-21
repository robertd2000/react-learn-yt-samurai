import {dialogReducer} from './dialogsReducer';
import {profileReducer} from './profileReducer';
import { sitebarReducer } from './sitebarReducer';


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

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = dialogReducer(this._state.messagesPage, action)
        this._state.sitebar = sitebarReducer(this._state.sitebar, action)

        this._callSubscriber(this._state)
    }
}

export default store
window.store = store
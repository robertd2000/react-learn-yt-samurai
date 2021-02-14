import { rerenderEntireTree } from "../render"

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi', likesCount: 12},
            {id: 2, message: 'Hello', likesCount: 11},
        ],
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
    },
    sitebar: {
        friends: [
            {id: 1, name: 'Robert'},
            {id: 2, name: 'Dio'},
            {id: 3, name: 'Jotaro'},
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    }

    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}

export default state
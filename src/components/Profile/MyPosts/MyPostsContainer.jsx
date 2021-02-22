import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = ({store}) => {

    let state = store.getState()
    const addPosts = () => {
        store.dispatch(addPostActionCreator())
    }

    let onPostChange  = (text) => {
        let action = updateNewPostTextActionCreator(text)
        store.dispatch(action)
    }

    return (
        <MyPosts 
            updateNewPostText={onPostChange}
            addPosts={addPosts}
            postsData={state.profilePage.posts}
            newPostText={state.profilePage.newPostText} />
    )
}

export default MyPostsContainer
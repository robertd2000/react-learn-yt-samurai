import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({state, dispatch}) => {
    const {posts, newPostText} = state
    return (
        <div> 
            <ProfileInfo />
            <MyPosts 
                postsData={posts}
                newPostText={newPostText}
                dispatch={dispatch}
            />
        </div>
    )
}

export default Profile
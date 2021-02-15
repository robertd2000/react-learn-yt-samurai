import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({state, addPost, updatenewPostText}) => {
    const {posts, newPostText} = state
    return (
        <div> 
            <ProfileInfo />
            <MyPosts 
                postsData={posts}
                newPostText={newPostText}
                addPost={addPost}
                updatenewPostText={updatenewPostText} />
        </div>
    )
}

export default Profile
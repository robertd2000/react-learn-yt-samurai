import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({state, addPost}) => {
    const {posts} = state
    return (
        <div> 
            <ProfileInfo />
            <MyPosts postsData={posts}
                addPost={addPost} />
        </div>
    )
}

export default Profile
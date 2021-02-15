import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ({postsData, addPost, newPostText, updatenewPostText}) => {

    let postsElements = postsData.map(post => <Post message={post.message} likes={post.likesCount} />)

    let newPostElement = React.createRef()

    const addPosts = () => {
        // let text = newPostElement.current.value
        addPost()
    }

    let onPostChange  = () => {
        let text = newPostElement.current.value
        updatenewPostText(text)
    }

    return (
        <div className={s.postsBlock}>
            <div>
                <h3>My posts</h3> 
                <div>
                    <textarea 
                        ref={newPostElement} 
                        value={newPostText}
                        onChange={onPostChange} />
                </div>
                <div>
                    <button onClick={addPosts} >Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts
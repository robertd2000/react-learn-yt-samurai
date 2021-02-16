import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ({postsData, newPostText, dispatch}) => {

    let postsElements = postsData.map(post => <Post message={post.message} likes={post.likesCount} />)

    let newPostElement = React.createRef()

    const addPosts = () => {
        // let text = newPostElement.current.value
        dispatch({type: 'ADD-POST'})
    }

    let onPostChange  = () => {
        let text = newPostElement.current.value
        let action = {type: 'UPDATE-NEW-POST-TEXT', newPostText: text}
        dispatch(action)
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
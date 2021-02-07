import React from 'react';
import s from './Post.module.css';

const Post = ({message, likes}) => {
    return (
        <div>
            <div className={s.item}>
                <img src="https://vokrug-tv.ru/pic/person/2/b/f/4/2bf448098b7badf3b37e87c510da29bc.jpeg" alt=""/>
                {message}
                <div>
                    <span>likes - {likes}</span>
                </div>
            </div>
            
        </div>
    )
}

export default Post
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const AddPostsForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name={'text'} placeholder={'text'} component={'textarea'} />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const PostFormRedux = reduxForm({
  form: 'addPost',
})(AddPostsForm);

const MyPosts = ({ postsData, addPosts }) => {
  let postsElements = postsData.map((post) => (
    <Post message={post.message} likes={post.likesCount} />
  ));

  const onSubmit = (formData) => {
    addPosts(formData.text);
  };

  return (
    <div className={s.postsBlock}>
      <div>
        <h3>My posts</h3>
        <PostFormRedux onSubmit={onSubmit} />
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;

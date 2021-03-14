import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  maxLengthCreator,
  requiredField,
} from '../../../utils/validators/validators';
import { TextArea } from '../../common/DormControls/FormControls';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const maxLength10 = maxLengthCreator(10);

const AddPostsForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name={'text'}
          placeholder={'text'}
          component={TextArea}
          validate={[requiredField, maxLength10]}
        />
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

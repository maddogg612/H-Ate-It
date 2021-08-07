import React from 'react';
import Form from '../components/Form.js';
import Posts from '../components/Posts.js';

const PostContainer = () => {
  return (
    <div className="posts-container">
      <div className="form-section">
        <Form />
      </div>
      <div className="post-section">
        <Posts />
      </div>
    </div>
  );
};

export default PostContainer;

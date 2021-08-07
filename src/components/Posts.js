import React from 'react';
import { Grid, CircularProgress, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Post from './Post/Post.js';

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <>
      <Typography variant="h6" align="center">
        List of the Foods You Have Tried:
      </Typography>
      <Grid
        className="postsContainer"
        container
        alignItems="stretch"
        spacing={3}
      >
        {posts.map((post) => (
          <Grid key={post._id} item>
            <Post post={post} />
          </Grid>
        ))}
      </Grid>
    </>
  );
  // <>
  //   <h2>List of the Foods You Have Tried:</h2>
  //   <Post />
  //   <Post />
  // </CircularProgress>
};

export default Posts;

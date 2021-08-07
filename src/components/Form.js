import React, { useState } from 'react';
import { Grid, TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { createPost } from '../actions/posts';

const Form = () => {
  const [postData, setPostData] = useState({
    restaurantName: '',
    dishName: '',
    rating: '',
    notes: '',
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    //e.preventDefault();
    //console.log(postData);
    dispatch(createPost(postData));
  };

  const clear = () => {};

  return (
    <Paper className="paper">
      <form
        autoComplete="off"
        noValidate
        className="form"
        onSubmit={handleSubmit}
      >
        <Grid container direction="column" spacing="1">
          <Grid item>
            <Typography variant="h6">What have you eaten today?</Typography>
          </Grid>
          <Grid item>
            <TextField
              name="restaurantName"
              variant="outlined"
              label="Restaurant Name"
              fullWidth
              value={postData.restaurantName}
              onChange={(e) =>
                setPostData({ ...postData, restaurantName: e.target.value })
              }
            />
          </Grid>
          <Grid item>
            <TextField
              name="dishName"
              variant="outlined"
              label="Name of the Dish"
              fullWidth
              value={postData.dishName}
              onChange={(e) =>
                setPostData({ ...postData, dishName: e.target.value })
              }
            />
          </Grid>
          <Grid item>
            <TextField
              name="rating"
              variant="outlined"
              label="Rating Out of 5"
              fullWidth
              value={postData.rating}
              onChange={(e) =>
                setPostData({ ...postData, rating: e.target.value })
              }
            />
          </Grid>
          <Grid item>
            <TextField
              name="notes"
              variant="outlined"
              label="Thoughts on the dish?"
              fullWidth
              value={postData.notes}
              onChange={(e) =>
                setPostData({ ...postData, notes: e.target.value })
              }
            />
          </Grid>
        </Grid>
        <Button
          className="buttonSubmit"
          fullWidth
          type="submit"
          variant="contained"
        >
          Submit
        </Button>
        <Button variant="contained" size="small" onClick={clear} fullWidth>
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;

/*
<div className="container">
      <form className="form">
        <div className="form-control">
          <label for="restaurantName">Restaurant Name</label>
          <input
            type="text"
            className="restaurantName"
            placeholder="Enter the Restaurant"
          ></input>
        </div>
        <div className="form-control">
          <label for="dishName">Dish Name</label>
          <input
            type="text"
            className="dishName"
            placeholder="What was the name of the dish?"
          ></input>
        </div>
        <div className="form-control">
          <label for="rating">Rating</label>
          <input
            type="text"
            className="rating"
            placeholder="Rating out of 5 stars"
          ></input>
        </div>
        <div className="form-control">
          <label for="notes">Notes</label>
          <input
            type="text"
            className="notes"
            placeholder="Would you try it again?"
          ></input>
        </div>
        <button>Submit</button>
      </form>
    </div>
    */

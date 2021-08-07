import React from 'react';
import { Card, CardContent, Button, Typography } from '@material-ui/core';

const Post = ({ post }) => {
  return (
    <Card className="card" variant="outlined">
      <CardContent>
        <Typography className="card-title" variant="h5">
          {post.restaurantName}
        </Typography>
      </CardContent>
      <div>
        <Typography className="card-detail" variant="p">
          Dish Name: {post.dishName}
        </Typography>
      </div>
      <div>
        <Typography className="card-detail" variant="p">
          Rating: {post.rating}
        </Typography>
      </div>
      <div>
        <Typography className="card-detail" variant="p">
          Notes: {post.notes}
        </Typography>
      </div>
      <Button variant="contained" fullWidth size="small" onClick={() => {}}>
        Delete
      </Button>
    </Card>
  );
};

export default Post;

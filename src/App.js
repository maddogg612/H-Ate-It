import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';

import Login from './components/Login.js';
import Navbar from './components/Navbar.js';
import Signup from './components/Signup.js';
import Home from './components/Home.js';
import PostContainer from './containers/PostContainer.js';
//import Form from './components/Form.js';
import './App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <div>
      <Router>
        <div className="header">
          <Navbar />
        </div>
        <div className="body">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/signup" component={Signup}></Route>
            <Route path="/posts" component={PostContainer}></Route>
          </Switch>
        </div>
      </Router>
      {/* <div>
        <PostContainer />
      </div> */}
    </div>
  );
};

export default App;

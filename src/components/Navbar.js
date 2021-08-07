import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  //const handleClick = () => {};
  return (
    <div className="Navbar">
      <div className="title">
        <h1>H/Ate It?</h1>
      </div>
      <nav className="linkList">
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;

import React from 'react';

class Signup extends React.Component {
  state = {
    email: '',
    pwd: '',
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <form className="form">
          <h2>Sign Up</h2>
          {/* <div className="form-control">
            <label for="username">Username</label>
            <input
              type="text"
              className="username"
              placeholder="Enter your Username"
            ></input>
          </div> */}
          <div className="form-control">
            <label for="email">Email</label>
            <input
              type="text"
              className="email"
              placeholder="Enter your Email"
            ></input>
          </div>
          <div className="form-control">
            <label for="password">Password</label>
            <input
              type="text"
              className="password"
              placeholder="Enter your password"
            ></input>
          </div>
          <div className="form-control">
            <label for="password2">Confirm Password</label>
            <input
              type="text"
              className="password2"
              placeholder="Please enter your password again"
            ></input>
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Signup;

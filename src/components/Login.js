import React, { useState, setState } from 'react';
//import PostContainer from '../containers/PostContainer';
import { Redirect } from 'react-router-dom';

// import { connect } from 'react-redux';
// import { login } from '../actions/auth';
//import MuiAlert from '@material-ui/lab/Alert';

// let Alert = (props) => <MuiAlert elevation={6} variant="filled" {...props} />;

// export default connect(null, { login })((props) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = setState('');
//   const [error, setError] = setState('');

//   const submitForm = () => {
//     if (email === '' || password === '') {
//       setError('Fields are required');
//       return;
//     }
//     props.login({ email, password });
//   };

//   return (
//     <div className="container">
//       <form className="form">
//         <h2>Log In</h2>
//         <div className="form-control">
//           <label for="email">Email</label>
//           <input
//             type="text"
//             className="email"
//             placeholder="Enter your Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           ></input>
//         </div>
//         <div className="form-control">
//           <label for="password">Password</label>
//           <input
//             type="text"
//             className="password"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           ></input>
//         </div>
//         <button type="submit" onSubmit={submitForm}>
//           Log In
//         </button>
//         {/* {error && (
//           <Alert severity="error" onClick={() => setError(null)}>
//             {props.error || error}
//           </Alert>
//         )} */}
//       </form>
//     </div>
//   );
// });

class Login extends React.Component {
  submitForm(e) {
    e.preventDefault();
    this.props.history.push('/posts');
    //return <Redirect to="/posts" />;
  }

  render() {
    return (
      <div className="container">
        <form className="form" onSubmit={this.submitForm.bind(this)}>
          <h2>Log In</h2>
          <div className="form-control">
            <label for="email">Email</label>
            <input
              type="text"
              className="email"
              placeholder="Enter your Email"
              // value={email}
              // onChange= {(e) => e.target.email}
            ></input>
          </div>
          <div className="form-control">
            <label for="password">Password</label>
            <input
              type="text"
              className="password"
              placeholder="Enter your password"
              // value={password}
              // onChange={(e) => e.target.value}
            ></input>
          </div>
          <button type="submit">Log In</button>
        </form>
      </div>
    );
  }
}

// let Login = () => {
//   const submitForm = () => {
//     //e.preventDefault();
//     return <Redirect to="/posts" />;
//   };

//   return (
//     <div className="container">
//       <form className="form" onSubmit={submitForm}>
//         <h2>Log In</h2>
//         <div className="form-control">
//           <label for="email">Email</label>
//           <input
//             type="text"
//             className="email"
//             placeholder="Enter your Email"
//             // value={email}
//             // onChange= {(e) => e.target.email}
//           ></input>
//         </div>
//         <div className="form-control">
//           <label for="password">Password</label>
//           <input
//             type="text"
//             className="password"
//             placeholder="Enter your password"
//             // value={password}
//             // onChange={(e) => e.target.value}
//           ></input>
//         </div>
//         <button type="submit">Log In</button>
//       </form>
//     </div>
//   );
// };

export default Login;

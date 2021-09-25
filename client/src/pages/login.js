import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../redux/actions/authAction';
import { clearError } from '../redux/actions/errorAction';
import { clearMessage } from '../redux/actions/successAction';

const Login = () => {

  const [userData, setUserData] = useState({email: '', password: ''});
  const { error, success } = useSelector(state => state);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearMessage());
    dispatch(login(userData));
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserData({...userData, [name]: value});
  }

  const handleCloseMessage = (e) => {
    dispatch(clearMessage());
  }

  useEffect(() => {
    dispatch(clearError());
  }, [])


  return (
    <div className="login">

      <h1 className="login_title mb-4 text-center">Login</h1>

      <form onSubmit={handleSubmit}>
        {error.message && <p className="form_error_message">{error.message}</p> }
        {success.message && 
          <p className="success_message">
            {success.message}
            <button className='close close_message' onClick={handleCloseMessage}>&times;</button>
          </p> 
        }

        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            name="email"
            onChange={handleChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            className="form-control" 
            id="password" 
            name="password"
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary" disabled={userData.email ? false : true}>Login</button>

        <p className='my-3'>
          You don't have an account ? . . . <Link to="/register" style={{color: "crimson"}}>
                                                Register Now
                                            </Link>
        </p>

      </form>
    </div>
  )
}

export default Login;

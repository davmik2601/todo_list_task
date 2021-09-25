import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { register } from '../redux/actions/authAction';
import { clearError } from '../redux/actions/errorAction';

const Register = () => {
  const [userData, setUserData] = useState({email: '', password: '', confirmPassword: ''});
  const { error, success } = useSelector(state => state);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(userData));
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserData({...userData, [name]: value});
  }

  useEffect(() => {
    dispatch(clearError());
    if(success.message) { history.push("/") }
  }, [success.message])


  return (
    <div className="register">

      <h1 className="login_title mb-4 text-center">Register</h1>

      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          {error.errors.email && <p className="error_message">{error.errors.email}</p>}
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            name="email"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          {error.errors.password && <p className="error_message">{error.errors.password}</p>}
          <input 
            type="password" 
            className="form-control" 
            id="password" 
            name="password"
            onChange={handleChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            Password must be minimum 6 charachters (minimum 1 number)
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Your Password</label>
          {error.errors.confirmPassword && <p className="error_message">{error.errors.confirmPassword}</p>}
          <input 
            type="password" 
            className="form-control" 
            id="confirmPassword" 
            name="confirmPassword"
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">Register</button>

        <p className='my-3'>
          You already have an account ? . . . <Link to="/" style={{color: "crimson"}}>
                                              Login
                                            </Link>
        </p>

      </form>
    </div>
  )
}

export default Register;

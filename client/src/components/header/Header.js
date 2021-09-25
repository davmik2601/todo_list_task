import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Logout from './Logout';

const Header = () => {

  const { auth } = useSelector(state => state);
  // console.log(auth);

  return (
    <div className="header">
      <nav className="navbar container">
        <Link className="logo" to="/">
          <h5>Todo List</h5>
        </Link>

        <div className="header_menu">
          { auth.token && <Logout /> }
          { !auth.token && <Link to="/register">Register</Link> }
          { !auth.token && <Link to="/">Login</Link> }
        </div>
      </nav>
    </div>
  )
}

export default Header;

import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/authAction';

const Logout = () => {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
  }

  return (
    <div>
      <div className="logout" onClick={handleClick}>Log Out</div>
    </div>
  )
}

export default Logout;

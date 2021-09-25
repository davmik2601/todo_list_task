import React from 'react';
import icon from '../images/loading3.gif';

const Loading = () => {
  return (
    <div className="main_loading">
      <img src={icon} alt="loading" />
      <h3>Loading ...</h3>
    </div>
  )
}

export default Loading;

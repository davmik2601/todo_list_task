import React from 'react';
import cover from '../images/cover7.jpg';

const NotFound = () => {
  return (
    <div 
    className="not_found position-relative" 
    style={{
      minHeight: '50%', 
      width: '80%', 
      left: '50%',
      top: '40%',
      transform: 'translate(-50%, -50%)',
      background: `url('${cover}')`,
      backgroundSize: '100% 450px',
      borderRadius: '20px',
      
    }}>

      <h2 className="position-absolute" 
      style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
        404 | NotFound
      </h2>
    </div>
  )
}

export default NotFound;

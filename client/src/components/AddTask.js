import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearError } from '../redux/actions/errorAction';
import { clearMessage } from '../redux/actions/successAction';
import { addTask } from '../redux/actions/taskAction';

const AddTask = () => {

  const dispatch = useDispatch();
  const [taskData, setTaskData] = useState({title: ''});
  const { success, error } = useSelector(state => state);

  const handleChange = (e) => {
    dispatch(clearError());
    dispatch(clearMessage());
    setTaskData({title: e.target.value});
  }

  const handleCloseMessage = (e) => {
    dispatch(clearMessage());
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(taskData));
    setTaskData({title: ''});
  }

  return (
    <div className="add_task collapse" id="collapseOne" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div>
        <form onSubmit={handleSubmit}>
          {success.message && 
            <p className="success_message">
              {success.message}
              <button className='close close_message' onClick={handleCloseMessage}>&times;</button>
            </p> 
          }
          <div className="form-group">
            <label htmlFor="title">Task Title</label>
            {error.errors.title && <p className="error_message">{error.errors.title}</p> }
            <input 
              type="text" 
              className="form-control" 
              id="title" 
              name="title"
              value={taskData.title}
              onChange={handleChange}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <button type="submit" className="btn btn-primary">Add</button>
        </form>
      </div>
    </div>
  )
}

export default AddTask;

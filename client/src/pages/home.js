import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddTask from '../components/AddTask';
import TodoList from '../components/TodoList';
import { clearError } from '../redux/actions/errorAction';
import { clearMessage } from '../redux/actions/successAction';
import { getList } from '../redux/actions/taskAction';

const Home = () => {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearMessage()); 
    dispatch(clearError());
  }

  useEffect(() => {
    dispatch(getList());
  }, [])

  return (
    <div className="home container">
      <div>
        <button 
        className="btn btn-md btn-primary dropdown-toggle" 
        data-toggle="collapse" 
        data-target="#collapseOne"
        onClick={handleClick} >
          Add New Task
        </button>
      </div>
      
      <div className="accordion" id="accordionExample">
        <AddTask />
      </div>
      <TodoList />
    </div>
  )
}

export default Home;

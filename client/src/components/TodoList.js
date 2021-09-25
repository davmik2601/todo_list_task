import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, getList } from '../redux/actions/taskAction';

const TodoList = () => {

  const { task } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  }

  useEffect(() => {
    dispatch(getList());
  }, [])

  
  return (
    <div className="todo_list">
      <div className="row my-3"><h3 className="text-white">Tasks</h3></div>
      <div className="row">
        {task.list && task.list.map((todo) => (
          <div key={todo._id} className="col-md-4">
            <div className="card mb-3 list_item">
              <div className="card-header">
                {todo.title}
              </div>
              {/* <div className="card-body">
                <h6 className="card-title"></h6>
              </div> */}
              <div className="card-footer text-muted">
                <span className="date mr-2">{todo.date.split(", ")[0]}, </span>
                <span className="time">{todo.date.split(", ")[1]}</span>
                <span className="material-icons delete_icon" onClick={() => handleDelete(todo._id)}>delete_outline</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TodoList;

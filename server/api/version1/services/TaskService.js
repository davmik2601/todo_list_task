import Task from "../models/Task.js";


class TaskService {
  constructor() {  }

  create = async (data) => {
    const task = new Task(data);
    await task.save();
    return task;
  }

  // getAll = async (select='') => {
  //   const list = await Task.find().select(select).sort([['updatedAt', -1]]);
  //   return list;
  // }

  getByUserId = async (userId, select='') => {
    const list = await Task.find({userId}).select(select).sort([['updatedAt', -1]]);
    return list;
  }

  delete = async (data, select='') => {
    const task = await Task.findOneAndDelete(data).select(select);
    return task;
  }
};

export default new TaskService();
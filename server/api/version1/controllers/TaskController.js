import { validationResult } from "express-validator";
import TaskService from "../services/TaskService.js";
import errorHandler from "../utils/errorHandler.js";


class TaskController {
  constructor() {  }
  
  get = async (req, res) => {

    try {
      
      const list = await TaskService.getByUserId(req.user._id);

      res.status(200).json({success: true, list});

    } catch (err) {
      errorHandler(res, err);
    }
  }


  create = async (req, res) => {

    try {

      const errorData = validationResult(req).errors;

      let errors = {}
      if(errorData[0]) {
        errorData.forEach(e => {
          errors[e.param] = e.msg;
        });
        return res.status(400).json({success: false, message: "Validation Error", errors: errors});
      };

      const taskData = {
        title: req.body.title,
        userId: req.user._id,
      };
      
      await TaskService.create(taskData);

      const list = await TaskService.getByUserId(req.user._id);
      
      res.status(200).json({success: true, list});

    } catch (err) {
      errorHandler(res, err);
    }
  }


  delete = async (req, res) => {

    try {
      const taskData = {
        _id: req.body._id
      };

      const task = await TaskService.delete(taskData);

      const list = await TaskService.getByUserId(req.user._id);
      
      res.status(200).json({success: true, list});

    } catch (err) {
      errorHandler(res, "You Don’t Have Access");
    }
  }
};

export default new TaskController();
import TaskController from "../api/version1/controllers/TaskController.js";
import auth from "../api/version1/middlewares/auth.js";
import createTaskValidator from "../api/version1/validators/createTaskValidator.js";

const routes = [
  {
    path: '/get',
    method: 'get',
    action: TaskController.get,
    middlewares: [auth]
  },
  {
    path: '/create',
    method: 'post',
    action: TaskController.create,
    validators: [createTaskValidator],
    middlewares: [auth]
  },
  {
    path: '/delete',
    method: 'delete',
    action: TaskController.delete,
    middlewares: [auth]
  },
];

export default routes;
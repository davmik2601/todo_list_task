import AuthController from "../api/version1/controllers/AuthController.js";
import auth from "../api/version1/middlewares/auth.js";
import registerValidator from "../api/version1/validators/registerValidator.js";

const routes = [
  {
    path: '/register',
    method: 'post',
    action: AuthController.register,
    validators: [registerValidator]
  },
  {
    path: '/login',
    method: 'post',
    action: AuthController.login,
  },

  {
    path: '/check_auth',
    method: 'get',
    action: AuthController.checkAuth,
  },
];

export default routes;
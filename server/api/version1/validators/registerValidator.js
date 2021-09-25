import { check } from "express-validator";
import UserService from "../services/UserService.js";

const registerValidator = [

  check('email')
    .exists().bail()
    .notEmpty()
      .withMessage('Email cannot be empty').bail()
    .isEmail()
      .withMessage('Email is not valid').bail()
    .custom(async val => {
      try {
        const data = await UserService.getByEmail(val, '-password');
        if(data) {
          return Promise.reject('This email is also exist');
        }
      } catch (err) {
        throw new Error(err);
      }
    }),

  check('password', 'Password must be minimum 6 characters (minimum 1 number)')
    .exists().bail()
    .matches("^(?=.*[A-Za-z])(?=.*[0-9])(?=.{6,})"),
  
  check('confirmPassword', 'Confirm password is not match with password')
    .custom((val, { req }) => val === req.body.password)
];

export default registerValidator;
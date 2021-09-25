import { check } from "express-validator";

const registerValidator = [

  check('title')
    .exists().bail()
    .notEmpty()
      .withMessage('Task Title Can Not Be Empty').bail()
];

export default registerValidator;
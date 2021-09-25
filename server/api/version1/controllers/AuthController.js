import { validationResult } from "express-validator";
import errorHandler from "../utils/errorHandler.js";
import bcrypt from 'bcrypt';
import UserService from "../services/UserService.js";
import keys from "../../../config/keys.js";
import createAccessToken from "../utils/createAccessToken.js";
import jwt from 'jsonwebtoken';


class AuthController {
  constructor() {  }


  register = async (req, res) => {

    try {
      const errorData = validationResult(req).errors;
      let errors = {}
      if(errorData[0]) {
        errorData.forEach(e => {
          errors[e.param] = e.msg;
        });
        return res.status(400).json({success: false, message: "Validation Error", errors: errors});
      };

      const candedate = {
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, 10),
      };

      const user = await UserService.create(candedate);

      return res.status(200).json({success: true, user});
      
    } catch (err) {
      errorHandler(res, err);
    }
  }


  login = async (req, res) => {
    try {
      const candetate = {
        email: req.body.email,
        password: req.body.password,
      };
      let user = await UserService.getByEmail(candetate.email);

      if(!user) {
        return res.status(400).json({success: false, message: "User Does Not Exist."});
      }
      if(! await bcrypt.compare(candetate.password, user.password)) {
        return res.status(401).json({success: false, message: "Password Is Wrong."});
      }
      
      user = await UserService.getById(user._id, "-password");

      const token = createAccessToken(keys.USER_ACCESS_TOKEN_SECRET, {
        email: user.email,
        id: user._id,
      });

      return res.status(200).json({success: true, user, token});

    } catch(err) {
      errorHandler(res, err);
    }
  }


  checkAuth = (req, res) => {

    try {
      const token = req.headers.authorization.split(' ')[1];
    
      if(!token) { return res.status(401).json({success: false, message: "Please Login !"}) };
    
      jwt.verify(token, keys.USER_ACCESS_TOKEN_SECRET, async (err, payload) => {
        if(err) { return res.status(401).json({success: false, message: "Please Login !"}) };

        const user = await UserService.getById(payload.id, "-password");

        if(!user) { return res.status(401).json({success: false, message: "User Does Not Exist !"}) };

        res.status(200).json({success: true, token, user});
      });
  
  
    } catch (err) {
      errorHandler(res, err);
    }
  }
};

export default new AuthController();
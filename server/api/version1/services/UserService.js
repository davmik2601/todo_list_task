import User from "../models/User.js";


class UserService {
  constructor() {  }

  create = async (candedate) => {
    const user = new User(candedate);
    await user.save();
    return user;
  }

  getByEmail = async (email, select = '') => {
    const user = await User.findOne({email}).select(select);
    return user;
  }

  getById = async (id, select = '') => {
    const user = await User.findById(id).select(select);
    return user;
  }
};

export default new UserService();
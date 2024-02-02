import { Op } from "sequelize";
import User from "../model/user.model";

class UserRepository {
  async getAllUser() {
    return await User.findAll();
  }

  async getOneUser(id: number) {
    return await User.findOne({
      where: {
        id,
      },
    });
  }

  async createUser(formRequest: any) {
    return await User.create(formRequest);
  }
}

export default UserRepository;

import { Request, Response } from "express";
import UserRepository from "../repositories/user.repository";

class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async getAllUser() {
    return await this.userRepository.getAllUser();
  }
  async getOneUser(id: number) {
    return await this.userRepository.getOneUser(id);
  }
  async createUser(formRequest: any) {
    await this.userRepository.createUser(formRequest);
  }
}

export default UserService;

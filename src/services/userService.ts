import User from '../models/user.js';
import { Attributes, CreationAttributes } from 'sequelize';

type UserType = Attributes<User>; // full User type including timestamps
type UserCreateType = CreationAttributes<User>; // fields required to create a user

// create a new user
export async function createUser(user: UserCreateType) {
  return User.create(user);
}

// get user by user id
export async function getUserById(id: string) {
  return await User.findByPk(id);
}

// get all users
export async function getAllUsers() {
  return await User.findAll();
}

// update User
export async function updateUser(id: string, data: Partial<UserType>) {
  return await User.update(data, { where: { id } });
}

export async function deleteUser(id: string) {
  return await User.destroy({ where: { id } });
}

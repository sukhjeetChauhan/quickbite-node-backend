import User from '../models/user';
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

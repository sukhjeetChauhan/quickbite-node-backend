import sequelize from '../db';
import User, { initUserModel } from './user';

initUserModel(sequelize);

export { sequelize, User };

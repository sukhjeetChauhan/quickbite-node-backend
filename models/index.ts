import sequelize from '../db';

import User, { initUserModel } from './user';
import Order, { initOrderModel } from './order';
import { initMenuItemModel } from './menuItem';

// 1. Initialize all models
initUserModel(sequelize);
initMenuItemModel(sequelize);
initOrderModel(sequelize);

// 2. Define associations
User.hasMany(Order, { foreignKey: 'userId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Order.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

// 3. Export everything
export { sequelize, User, Order };

import sequelize from '../db/index.js';

import User, { initUserModel } from './user.js';
import Order, { initOrderModel } from './order.js';
import MenuItem, { initMenuItemModel } from './menuItem.js';
import OrderItem, { initOrderItemModel } from './orderItem.js';

// 1. Initialize all models
initUserModel(sequelize);
initMenuItemModel(sequelize);
initOrderModel(sequelize);

// 2. Define associations
// orders table associations
User.hasMany(Order, { foreignKey: 'userId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Order.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

// order_items many to many associations
// Order <-> OrderItem
Order.hasMany(OrderItem, { foreignKey: 'orderId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
OrderItem.belongsTo(Order, { foreignKey: 'orderId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
// MenuItem <-> OrderItem
MenuItem.hasMany(OrderItem, { foreignKey: 'menuItemId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
OrderItem.belongsTo(MenuItem, {
  foreignKey: 'menuItemId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

export { sequelize, User, Order, MenuItem, OrderItem };

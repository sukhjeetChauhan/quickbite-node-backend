import { Model, DataTypes, Sequelize } from 'sequelize';

export default class Order extends Model {}

export function initOrderModel(sequelize: Sequelize) {
  Order.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.STRING,
        allowNull: false, // just define type, let association add FK rules
      },
      totalPrice: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      address: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM('pending', 'preparing', 'completed', 'cancelled'),
        defaultValue: 'pending',
        allowNull: false,
      },
      paymentStatus: {
        type: DataTypes.ENUM('unpaid', 'paid', 'refunded'),
        defaultValue: 'unpaid',
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Order',
      tableName: 'orders',
      timestamps: true,
    },
  );
}

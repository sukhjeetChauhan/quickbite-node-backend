import { DataTypes } from 'sequelize';

/** @type {import('sequelize-cli').Migration} */

export async function up(queryInterface) {
  await queryInterface.createTable('orders', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'users', // table name (not model)
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
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
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
}

export async function down(queryInterface) {
  await queryInterface.dropTable('orders');
}

import { Model, DataTypes, Sequelize } from 'sequelize';

export default class User extends Model {}
export function initUserModel(sequelize: Sequelize) {
  User.init(
    {
      id: {
        type: DataTypes.STRING,
        // autoIncrement: true,
        primaryKey: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      role: {
        type: DataTypes.ENUM('admin', 'user'),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users',
      timestamps: true,
    },
  );
}

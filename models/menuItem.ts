import { Model, DataTypes, Sequelize } from 'sequelize';

export default class MenuItem extends Model {}
export function initMenuItemModel(sequelize: Sequelize) {
  MenuItem.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      imgurl: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      category: {
        type: DataTypes.ENUM('indian', 'asian', 'american', 'mediterranean'),
        allowNull: false,
      },
      dietType: {
        type: DataTypes.ENUM('vegan', 'vegetarian', 'paleo', 'keto', 'gluten-free', 'none'),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'MenuItem',
      tableName: 'menuItems',
    },
  );
}

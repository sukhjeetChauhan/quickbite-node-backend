import { DataTypes } from 'sequelize';

/** @type {import('sequelize-cli').Migration} */

export async function up(queryInterface) {
  await queryInterface.createTable('menuItems', {
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
  });
}

export async function down(queryInterface) {
  await queryInterface.dropTable('menuItems');
}

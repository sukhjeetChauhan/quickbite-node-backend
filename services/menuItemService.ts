import MenuItem from '../models/menuItem';
import { Attributes, CreationAttributes } from 'sequelize';

type MenuItemType = Attributes<MenuItem>;
type MenuItemCreateType = CreationAttributes<MenuItem>;

// Get all menu items
export async function getAllMenuItems() {
  return MenuItem.findAll();
}

// Get menu item by ID
export async function getMenuItemById(id: number) {
  return MenuItem.findByPk(id);
}

// Add new menu item
export async function addMenuItem(item: MenuItemCreateType) {
  return MenuItem.create(item);
}

// Update menu item by ID
export async function updateMenuItem(id: number, data: Partial<MenuItemType>) {
  return MenuItem.update(data, { where: { id } });
}

// Delete menu item by ID
export async function deleteMenuItem(id: number) {
  return MenuItem.destroy({ where: { id } });
}

// Get menu items by category
export async function getMenuItemsByCategory(category: MenuItemType['category']) {
  return MenuItem.findAll({ where: { category } });
}

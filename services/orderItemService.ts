import OrderItem from '../models/orderItem';
import { Attributes, CreationAttributes } from 'sequelize';

type OrderItemType = Attributes<OrderItem>;
type OrderItemCreateType = CreationAttributes<OrderItem>;

// Get all order items
export async function getAllOrderItems() {
  return OrderItem.findAll();
}

// Get order item by ID
export async function getOrderItemById(id: number) {
  return OrderItem.findByPk(id);
}

// Create new order item
export async function createOrderItem(orderItem: OrderItemCreateType) {
  return OrderItem.create(orderItem);
}

// Update order item by ID
export async function updateOrderItem(id: number, data: Partial<OrderItemType>) {
  return OrderItem.update(data, { where: { id } });
}

// Delete order item by ID
export async function deleteOrderItem(id: number) {
  return OrderItem.destroy({ where: { id } });
}

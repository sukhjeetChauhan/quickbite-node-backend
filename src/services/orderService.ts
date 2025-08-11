import Order from '../models/order.js';
import { Attributes, CreationAttributes } from 'sequelize';

type OrderType = Attributes<Order>;
type OrderCreateType = CreationAttributes<Order>;

// Get all orders
export async function getAllOrders() {
  return Order.findAll();
}

// Get order by ID
export async function getOrderById(id: number) {
  return Order.findByPk(id);
}

// Create new order
export async function createOrder(order: OrderCreateType) {
  return Order.create(order);
}

// Update order by ID
export async function updateOrder(id: number, data: Partial<OrderType>) {
  return Order.update(data, { where: { id } });
}

// Delete order by ID
export async function deleteOrder(id: number) {
  return Order.destroy({ where: { id } });
}

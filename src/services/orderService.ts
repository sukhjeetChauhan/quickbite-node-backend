import Order from '../models/order.js';
import { Attributes, CreationAttributes } from 'sequelize';
import {
  createOrderItem,
  createOrderItems,
  OrderItemCreateType,
  OrderItemType,
} from './orderItemService.js';
import sequelize from '../db/index.js';
import OrderItem from '../models/orderItem.js';
import MenuItem from '../models/menuItem.js';

type OrderType = Attributes<Order>;
type OrderCreateType = CreationAttributes<Order>;
type CreateOrderWithItemsInput = {
  order: OrderCreateType;
  items: Omit<OrderItemCreateType, 'orderId'>[];
};

// Get all orders
export async function getAllOrders() {
  return Order.findAll();
}

// Get order by ID
export async function getOrderWithItems(id: number) {
  const order = (await Order.findByPk(id, {
    include: [
      {
        model: OrderItem,
        include: [
          {
            model: MenuItem,
            attributes: ['name'],
          },
        ],
      },
    ],
  })) as Order & { OrderItems?: OrderItemType[] };

  if (!order) return null;

  return {
    id: order.id,
    userId: order.userId,
    totalPrice: order.totalPrice,
    address: order.address,
    status: order.status,
    paymentStatus: order.paymentStatus,
    items:
      (order.OrderItems as (OrderItemType & { MenuItem?: { name: string } })[]).map((item) => ({
        name: item.MenuItem?.name,
        quantity: item.quantity,
        price: item.price,
      })) || [],
  };
}

// Create new order
export async function createOrder(data: CreateOrderWithItemsInput) {
  return sequelize.transaction(async (t) => {
    // Step 1: Create the order
    const newOrder = await Order.create({ ...data.order }, { transaction: t });

    // Step 2: Create the order items (assigning orderId)
    await createOrderItems(
      data.items.map((item) => ({
        ...item,
        orderId: newOrder.id,
      })),
      { transaction: t, returning: false },
    );

    return newOrder;
  });
}

// Update order by ID
export async function updateOrder(id: number, data: Partial<OrderType>) {
  return Order.update(data, { where: { id } });
}

// Delete order by ID
export async function deleteOrder(id: number) {
  return Order.destroy({ where: { id } });
}

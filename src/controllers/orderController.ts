import express, { Request, Response } from 'express';
import * as orderService from '../services/orderService.js';

const router = express.Router();

// Get all orders
router.get('/', async (_req: Request, res: Response) => {
  try {
    const orders = await orderService.getAllOrders();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

// Get order by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const order = await orderService.getOrderById(Number(req.params.id));
    if (!order) return res.status(404).json({ error: 'Order not found' });
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

// Create new order
router.post('/', async (req: Request, res: Response) => {
  try {
    const newOrder = await orderService.createOrder(req.body);
    res.status(200).json(newOrder);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
});

// Update order
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const [updatedCount] = await orderService.updateOrder(Number(req.params.id), req.body);
    if (updatedCount === 0) return res.status(404).json({ error: 'Order not found or no changes' });
    res.json({ message: 'Order updated' });
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
});

// Delete order
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const deletedCount = await orderService.deleteOrder(Number(req.params.id));
    if (deletedCount === 0) return res.status(404).json({ error: 'Order not found' });
    res.json({ message: 'Order deleted' });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

export default router;

import express, { Request, Response } from 'express';
import * as orderItemService from '../services/orderItemService';

const router = express.Router();

// Get all order items
router.get('/', async (_req: Request, res: Response) => {
  try {
    const items = await orderItemService.getAllOrderItems();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

// Get order item by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const item = await orderItemService.getOrderItemById(Number(req.params.id));
    if (!item) return res.status(404).json({ error: 'OrderItem not found' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

// Create new order item
router.post('/', async (req: Request, res: Response) => {
  try {
    const newItem = await orderItemService.createOrderItem(req.body);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
});

// Update order item
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const [updatedCount] = await orderItemService.updateOrderItem(Number(req.params.id), req.body);
    if (updatedCount === 0)
      return res.status(404).json({ error: 'OrderItem not found or no changes' });
    res.json({ message: 'OrderItem updated' });
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
});

// Delete order item
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const deletedCount = await orderItemService.deleteOrderItem(Number(req.params.id));
    if (deletedCount === 0) return res.status(404).json({ error: 'OrderItem not found' });
    res.json({ message: 'OrderItem deleted' });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

export default router;

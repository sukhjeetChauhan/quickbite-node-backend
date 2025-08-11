import express, { Request, Response } from 'express';
import * as menuItemService from '../services/menuItemService';

const router = express.Router();

// Get all menu items
router.get('/', async (_req: Request, res: Response) => {
  try {
    const items = await menuItemService.getAllMenuItems();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

// Get menu item by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const item = await menuItemService.getMenuItemById(Number(req.params.id));
    if (!item) return res.status(404).json({ error: 'MenuItem not found' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

// Get menu items by category
router.get('/category/:category', async (req: Request, res: Response) => {
  try {
    type Category = 'indian' | 'asian' | 'american' | 'mediterranean';
    const category = req.params.category as Category;
    const items = await menuItemService.getMenuItemsByCategory(category);
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

// Add new menu item
router.post('/', async (req: Request, res: Response) => {
  try {
    const newItem = await menuItemService.addMenuItem(req.body);
    res.status(200).json(newItem);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
});

// Update menu item
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const [updatedCount] = await menuItemService.updateMenuItem(Number(req.params.id), req.body);
    if (updatedCount === 0)
      return res.status(404).json({ error: 'MenuItem not found or no changes' });
    res.json({ message: 'MenuItem updated' });
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
});

// Delete menu item
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const deletedCount = await menuItemService.deleteMenuItem(Number(req.params.id));
    if (deletedCount === 0) return res.status(404).json({ error: 'MenuItem not found' });
    res.json({ message: 'MenuItem deleted' });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

export default router;

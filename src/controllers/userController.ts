import express from 'express';
import { Request, Response } from 'express';
import * as userService from '../services/userService.js';

const router = express.Router();

// get all Users
router.get('/', async (_req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

// get users by id
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const userId = decodeURIComponent(req.params.id);
    const user = await userService.getUserById(userId);

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

// create a new user
router.post('/', async (req: Request, res: Response) => {
  try {
    const user = await userService.createUser(req.body);

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
});

// Update user
router.put('/:id', async (req, res) => {
  try {
    const userId = decodeURIComponent(req.params.id);
    const [updatedCount] = await userService.updateUser(userId, req.body);
    if (updatedCount === 0) return res.status(404).json({ error: 'User not found or no changes' });
    res.json({ message: 'User updated' });
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
});

// Delete user
router.delete('/:id', async (req, res) => {
  try {
    const deletedCount = await userService.deleteUser(req.params.id);
    if (deletedCount === 0) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

export default router;

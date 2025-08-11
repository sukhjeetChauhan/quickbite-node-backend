import express from 'express';
import cors, { CorsOptions } from 'cors';
import userController from './controllers/userController.js';
import menuItemController from './controllers/menuItemController.js';
import orderController from './controllers/orderController.js';
import orderItemController from './controllers/orderItemController.js';
import { sequelize } from './models/index.js';

const corsOptions: CorsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
};

const app = express();

app.use(cors(corsOptions)); // cors middleware
app.use(express.json()); // middleware to parse json data

// define controller routes here
app.use('/user', userController);
app.use('/menu-items', menuItemController);
app.use('/orders', orderController);
app.use('/order-items', orderItemController);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected!');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1); // optional: stop app if DB connection fails
  }
})();

export default app;

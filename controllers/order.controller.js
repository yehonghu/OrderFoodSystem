import Order from '../models/order.model.js';

export const createOrder = async (req, res) => {
  try {
    const { userId, foodItems, totalPrice } = req.body;
    const order = new Order({ userId, foodItems, totalPrice });
    await order.save();
    res.status(201).json({ message: 'Order created successfully!', order });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
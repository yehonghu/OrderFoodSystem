import Food from '../models/food.model.js';

export const createFood = async (req, res) => {
  try {
    const food = new Food(req.body);
    await food.save();
    res.status(201).json({ message: 'Food created successfully!', food });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getFoods = async (req, res) => {
  try {
    const foods = await Food.find();
    res.status(200).json(foods);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
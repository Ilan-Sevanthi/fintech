const express = require('express');
const router = express.Router();
const GenerateBill = require('../models/GenerateBill');

// Create Generate Bill
router.post('/', async (req, res) => {
  try {
    const newBill = new GenerateBill(req.body);
    const savedBill = await newBill.save();
    res.status(201).json(savedBill);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all Generate Bills
router.get('/', async (req, res) => {
  try {
    const bills = await GenerateBill.find();
    res.json(bills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Fetch generate bills and recurring bills with name, phone number, and amount
router.get('/api/generatebills', async (req, res) => {
  try {
    const generateBills = await GenerateBill.find({}, 'startDate clientName phoneNumber totalAmount');
    res.json(generateBills);
  } catch (error) {
    res.status(500).send('Error fetching generate bills');
  }
});

module.exports = router;

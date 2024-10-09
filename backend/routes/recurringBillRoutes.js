const express = require('express');
const router = express.Router();
const RecurringBill = require('../models/RecurringBill');

// Create Recurring Bill
router.post('/', async (req, res) => {
  try {
    const newBill = new RecurringBill(req.body);
    const savedBill = await newBill.save();
    res.status(201).json(savedBill);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all Recurring Bills
router.get('/', async (req, res) => {
  try {
    const bills = await RecurringBill.find();
    res.json(bills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.get('/api/recurringbills', async (req, res) => {
  try {
    const recurringBills = await RecurringBill.find({}, 'clientName phoneNumber dueDate totalAmount');
    
    const transformedBills = recurringBills.map(bill => ({
      phoneNumber: bill.phoneNumber,
      name: bill.clientName || 'Recurring Client', 
      amount: bill.totalAmount || 500, // Use actual totalAmount from DB, default to 500 if undefined
      dueDate: bill.dueDate, // Include due date if needed in the response
    }));

    res.json(transformedBills);
  } catch (error) {
    console.error("Error fetching recurring bills:", error);
    res.status(500).send('Error fetching recurring bills');
  }
});


module.exports = router;

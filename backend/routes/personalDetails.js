const express = require('express');
const router = express.Router();
const PersonalDetails = require('../models/PersonalDetails');

// Create personal details
router.post('/', async (req, res) => {
  try {
    const newPersonalDetails = new PersonalDetails(req.body);
    const savedPersonalDetails = await newPersonalDetails.save();
    res.status(201).json(savedPersonalDetails);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all personal details
router.get('/', async (req, res) => {
  try {
    const personalDetails = await PersonalDetails.find();
    res.json(personalDetails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update personal details by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedPersonalDetails = await PersonalDetails.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedPersonalDetails) {
      return res.status(404).json({ message: 'Personal details not found' });
    }

    res.json(updatedPersonalDetails);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete personal details by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedPersonalDetails = await PersonalDetails.findByIdAndDelete(req.params.id);

    if (!deletedPersonalDetails) {
      return res.status(404).json({ message: 'Personal details not found' });
    }

    res.status(204).send(); // Sending a 204 No Content response to indicate successful deletion
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//getting phone number

router.get('/client-info', async (req, res) => {
  const { phoneNo } = req.query;

  try {
    const personalDetail = await PersonalDetails.findOne({ phoneNo }).select('clientName accountNumber gstNo');

    if (!personalDetail) {
      return res.status(404).json({ message: 'Phone number not found' });
    }

    res.json(personalDetail);
  } catch (error) {
    console.error('Error fetching personal details:', error);
    res.status(500).json({ message: 'Error fetching personal details' });
  }
});

module.exports = router;


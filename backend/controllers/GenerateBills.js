// Fetch generate bills and recurring bills with name, phone number, and amount
app.get('/api/generatebills', async (req, res) => {
  try {
    const generateBills = await GenerateBill.find({}, 'startDate clientName phoneNumber totalAmount');
    res.json(generateBills);
  } catch (error) {
    res.status(500).send('Error fetching generate bills');
  }
});
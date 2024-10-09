app.get('/api/recurringbills', async (req, res) => {
    try {
      const recurringBills = await RecurringBill.find({}, 'phoneNumber dueDate');
      
      const transformedBills = recurringBills.map(bill => ({
        phoneNumber: bill.phoneNumber,
        name: 'Recurring Client', // Placeholder since you don't have name in the schema
        amount: 500, // Placeholder amount, you can derive it based on business logic
      }));
  
      res.json(transformedBills);
    } catch (error) {
      res.status(500).send('Error fetching recurring bills');
    }
  });
const mongoose = require('mongoose');

const RecurringBillSchema = new mongoose.Schema({
  phoneNumber: { type: String, required: true },
  accountNumber: { type: String, required: true },
  clientName: { type: String, required: true }, // Client name field
  dueDate: { type: Date, required: true },
  totalAmount: { type: Number, required: true }, // Added totalAmount field
}, { timestamps: true });

module.exports = mongoose.model('RecurringBill', RecurringBillSchema);

const mongoose = require('mongoose');

const GenerateBillSchema = new mongoose.Schema({
  phoneNumber: { type: String, required: true },
  clientName: { type: String, required: true },  // Added clientName field
  gstNo: { type: String, required: true },
  accountNumber: { type: String, required: true },
  invoiceDate: { type: Date, required: true },
  startDate: { type: Date, required: true },
  finishDate: { type: Date, required: true },
  duration: { type: Number, required: true },
  costPerDay: { type: Number, required: true },
  totalAmount: { type: Number, required: true },
  invoiceGeneration: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('GenerateBill', GenerateBillSchema);

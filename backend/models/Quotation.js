const mongoose = require('mongoose');

const QuotationSchema = new mongoose.Schema({
  clientName: { type: String, required: true },
  clientCompany: { type: String, required: true },
  items: [
    {
      itemDescription: { type: String, required: true },
      quantity: { type: Number, required: true },
      unitPrice: { type: Number, required: true },
      netAmount: { type: Number, required: true },
      taxAmount: { type: Number, required: true },
      totalAmount: { type: Number, required: true }
    }
  ],
  grandTotal: { type: Number, required: true },
  currency: { type: String, required: true },
  quotationNumber: { type: String, required: true },
  gstNumber: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Quotation', QuotationSchema);

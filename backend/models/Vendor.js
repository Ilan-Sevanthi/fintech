const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema({
  vendorName: { type: String, required: true },
  contactNumber: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  companyRegistrationNumber: { type: String, required: true },
  tinVatGst: { type: String, required: true },
  bankName: { type: String, required: true },
  bankAccountNumber: { type: String, required: true },
});

module.exports = mongoose.model("Vendor", vendorSchema);

const mongoose = require('mongoose');

const PersonalDetailsSchema = new mongoose.Schema({
  clientName: { type: String, required: true },          // Client Name is required
  dob: { type: Date, required: false },                  // Date of Birth is optional
  panCard: { type: String, required: false },            // PAN Card is optional
  bankName: { type: String, required: false },           // Bank Name is optional
  email: { type: String, required: true },               // Email is required
  accountNumber: { type: String, required: false },      // Account Number is optional
  gstNo: { type: String, required: true },               // GST Number is required
  phoneNo: { type: String, required: true },             // Phone Number is required
  ifscCode: { type: String, required: false },           // IFSC Code is optional
  location: { type: String, required: false },           // Location is optional
  branch: { type: String, required: false },             // Branch is optional
  gender: {                                              // Gender is optional, with enum options
    type: String,
    required: false,
    enum: ['Male', 'Female', 'Other'],
  },
  accountType: {                                         // Account Type is optional, with enum options
    type: String,
    required: false,
    enum: ['Savings', 'Current', 'Fixed Deposit'],
  },
});

module.exports = mongoose.model('PersonalDetails', PersonalDetailsSchema);

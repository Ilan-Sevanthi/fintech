const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  directory: { type: String, required: true },
  name: { type: String, required: true },
  mailingName: { type: String, required: true },
  address: { type: String, required: true },
  country: { type: String, required: true },
  state: { type: String, required: true },
  pincode: { type: String, required: true },
  financialYear: { type: String, required: true },
  booksBeginning: { type: String, required: true },
  tallyVaultPassword: { type: String },
  useSecurityControl: { type: Boolean, default: false },
  currencySymbol: { type: String, required: true },
  formalName: { type: String, required: true },
  suffixSymbol: { type: Boolean, default: false },
  spaceBetweenSymbol: { type: Boolean, default: true },
  amountInMillions: { type: Boolean, default: false }
});

module.exports = mongoose.model("Company", companySchema);
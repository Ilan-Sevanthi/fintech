const express = require("express");
const router = express.Router();
const Vendor = require("../models/Vendor");

// Create a new vendor
router.post("/", async (req, res) => {
  const {
    vendorName,
    contactNumber,
    email,
    address,
    companyRegistrationNumber,
    tinVatGst,
    bankName,
    bankAccountNumber,
  } = req.body;

  try {
    const newVendor = new Vendor({
      vendorName,
      contactNumber,
      email,
      address,
      companyRegistrationNumber,
      tinVatGst,
      bankName,
      bankAccountNumber,
    });

    await newVendor.save();
    res.status(201).json({ message: "Vendor details submitted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error submitting vendor details" });
  }
});

// Get all vendors
router.get("/", async (req, res) => {
  try {
    const vendors = await Vendor.find();
    res.json(vendors);
  } catch (error) {
    res.status(500).json({ error: "Error fetching vendor details" });
  }
});

// Update vendor details
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const vendor = await Vendor.findByIdAndUpdate(id, updatedData, { new: true });
    if (!vendor) return res.status(404).json({ error: "Vendor not found" });
    res.json({ message: "Vendor details updated successfully", vendor });
  } catch (error) {
    res.status(500).json({ error: "Error updating vendor details" });
  }
});

// Delete a vendor
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const vendor = await Vendor.findByIdAndDelete(id);
    if (!vendor) return res.status(404).json({ error: "Vendor not found" });
    res.json({ message: "Vendor deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting vendor" });
  }
});

module.exports = router;

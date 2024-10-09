
// const express = require('express');
// const cors = require('cors');
// const connectDB = require('./config/db');
// const generateBillRoutes = require('./routes/generateBillRoutes');
// const recurringBillRoutes = require('./routes/recurringBillRoutes');
// const personalDetailsRoutes = require('./routes/personalDetails'); // Optional
// const quotationRoutes = require('./routes/quotationRoutes');
// const vendorRoutes = require("./routes/vendorProfile");

// // require('dotenv').config();

// const app = express();

// // Connect to MongoDB
// connectDB();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api/generatebills', generateBillRoutes);
// app.use('/api/recurringbills', recurringBillRoutes);
// app.use('/api/personal-details', personalDetailsRoutes); // Optional
// app.use('/api/quotations', quotationRoutes);
// app.use("/api/vendorProfile", vendorRoutes);



// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));





const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const generateBillRoutes = require('./routes/generateBillRoutes');
const recurringBillRoutes = require('./routes/recurringBillRoutes');
const personalDetailsRoutes = require('./routes/personalDetails'); // Optional
const quotationRoutes = require('./routes/quotationRoutes');
const vendorRoutes = require("./routes/vendorProfile");
const companyRoutes = require('./routes/companyRoutes');
// require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/generatebills', generateBillRoutes);
app.use('/api/recurringbills', recurringBillRoutes);
app.use('/api/personal-details', personalDetailsRoutes); // Optional
app.use('/api/quotations', quotationRoutes);
app.use("/api/vendorProfile", vendorRoutes);
app.use('/api/company', companyRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

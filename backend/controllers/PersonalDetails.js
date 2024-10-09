// router.get('/client-info', async (req, res) => {
//   const { phoneNo } = req.query;

//   try {
//     const personalDetail = await PersonalDetails.findOne({ phoneNo }).select('clientName accountNumber gstNo');

//     if (!personalDetail) {
//       return res.status(404).json({ message: 'Phone number not found' });
//     }

//     res.json(personalDetail);
//   } catch (error) {
//     console.error('Error fetching personal details:', error);
//     res.status(500).json({ message: 'Error fetching personal details' });
//   }
// });


router.get('/client-info', async (req, res) => {
  const { phoneNo } = req.query;

  try {
    // Fetch the client details using phoneNo
    const personalDetail = await PersonalDetails.findOne({ phoneNo }).select('clientName accountNumber gstNo');

    // Check if personal details were found
    if (!personalDetail) {
      return res.status(404).json({ message: 'Phone number not found' });
    }

    // Return the client details
    res.json({
      clientName: personalDetail.clientName,
      accountNumber: personalDetail.accountNumber,
      gstNumber: personalDetail.gstNo // Consistent naming for gstNumber
    });

  } catch (error) {
    // Log the error and send a 500 response in case of server-side issues
    console.error('Error fetching personal details:', error);
    res.status(500).json({ message: 'Error fetching personal details' });
  }
});


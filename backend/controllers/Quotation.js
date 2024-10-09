router.get('/api/quotations', async (req, res) => {
    try {
        // Fetching all quotations, and selecting specific fields
        const quotations = await Quotation.find({}, 'clientName clientCompany items grandTotal currency quotationNumber gstNumber');
        
        // Formatting the response for each quotation to match the structure
        const formattedQuotations = quotations.map(quotation => ({
            clientName: quotation.clientName,
            clientCompany: quotation.clientCompany,
            items: quotation.items.map(item => ({
                itemDescription: item.itemDescription,
                quantity: item.quantity,
                unitPrice: item.unitPrice,
                netAmount: item.netAmount,
                taxAmount: item.taxAmount,
                totalAmount: item.totalAmount
            })),
            grandTotal: quotation.grandTotal,
            currency: quotation.currency,
            quotationNumber: quotation.quotationNumber,
            gstNumber: quotation.gstNumber
        }));

        res.json(formattedQuotations);
    } catch (error) {
        res.status(500).send('Error fetching quotations');
    }
});

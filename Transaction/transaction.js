// Function to generate a random alphanumeric Transaction ID
function generateTransactionId() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let transactionId = '';
    for (let i = 0; i < 10; i++) {
        transactionId += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return transactionId;
}

// Automatically generate and set Transaction ID when the page loads
window.onload = function () {
    document.getElementById('transactionId').value = generateTransactionId();
};

// Capture Transaction Form submission
const transactionForm = document.getElementById('transactionForm');

transactionForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form data
    const transactionData = {
        transactionId: document.getElementById('transactionId').value,  // Auto-generated
        customerSsnId: document.getElementById('customerSsnId').value,
        customerName: document.getElementById('customerName').value,
        accountId: document.getElementById('accountId').value,
        aadhaarCard: document.getElementById('aadhaarCard').value,
        panCard: document.getElementById('panCard').value,
        address: document.getElementById('address').value,
        date: document.getElementById('date').value,
        contactNumber: document.getElementById('contactNumber').value,
        modeOfTransaction: document.getElementById('modeOfTransaction').value,
        amount: document.getElementById('amount').value,
        transactionType: document.getElementById('transactionType').value
    };

    console.log('Transaction Data:', transactionData);

    // Send this data to your backend (e.g., via API call) to store the transaction
    alert('Transaction submitted successfully!'); // Placeholder
});

// Search for Transactions by Customer ID
const searchBtn = document.getElementById('searchBtn');
const resultsBody = document.getElementById('resultsBody');

searchBtn.addEventListener('click', function () {
    const customerId = document.getElementById('customerIdSearch').value;

    if (customerId) {
        // Fetch the transactions from your backend based on Customer ID
        const mockResults = [
            {
                transactionId: 'TX001',
                customerSsnId: 'SSN123456',
                accountId: 'ACC123',
                modeOfTransaction: 'Online',
                amount: '5000',
                transactionType: 'Credit',
                date: '2024-09-20'
            }
            // Add more mock results here or use real data from backend
        ];

        // Clear previous results
        resultsBody.innerHTML = '';

        // Populate the table with the fetched transactions
        mockResults.forEach(result => {
            const row = `<tr>
                <td>${result.transactionId}</td>
                <td>${result.customerSsnId}</td>
                <td>${result.accountId}</td>
                <td>${result.modeOfTransaction}</td>
                <td>${result.amount}</td>
                <td>${result.transactionType}</td>
                <td>${result.date}</td>
            </tr>`;
            resultsBody.innerHTML += row;
        });
    } else {
        alert('Please enter a Customer ID.');
    }
});

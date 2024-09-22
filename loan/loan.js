// Handle loan submission
document.getElementById('loanForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const ssnId = document.getElementById('ssnId').value;
    if (ssnId.trim() === '') {
        alert('Customer SSN ID is required!');
        return;
    }

    alert('Loan request submitted successfully!');
    document.getElementById('loanForm').reset();
});

// Search loan request
document.getElementById('searchLoan').addEventListener('click', function () {
    const ssnId = document.getElementById('searchSsnId').value;

    if (ssnId === 'EXAMPLE1' || ssnId === "EXAMPLE2") {
        document.getElementById('loanUpdateForm').style.display = 'block';
        // Populate with mock data
        document.getElementById('updateCustomerName').value = 'John Doe';
        document.getElementById('updateOccupation').value = 'Engineer';
        document.getElementById('updateEmployerName').value = 'XYZ Corp';
        document.getElementById('updateEmployerAddress').value = '123 Main St';
        document.getElementById('updateEmail').value = 'john@example.com';
        document.getElementById('updateAddress').value = '456 Elm St';
        document.getElementById('updateMaritalStatus').value = 'Single';
        document.getElementById('updateContactNumber').value = '1234567890';
        document.getElementById('updateLoanAmount').value = 10000;
        document.getElementById('updateLoanDuration').value = 24;
    } else {
        alert('Loan request not found!');
    }
});

// Handle loan update
document.getElementById('loanUpdateForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Loan request updated successfully!');
    document.getElementById('loanUpdateForm').reset();
    document.getElementById('loanUpdateForm').style.display = "none";
});

// Handle loan cancellation
document.getElementById('cancelLoan').addEventListener('click', function () {
    const confirmCancel = confirm('Are you sure you want to cancel this loan request?');
    if (confirmCancel) {
        alert('Loan request canceled successfully!');
        document.getElementById('loanUpdateForm').reset();
        document.getElementById('loanUpdateForm').style.display = 'none';
    }
});
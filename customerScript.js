// Register the customer
function registerCustomer() {
    const ssn = document.getElementById('ssn').value;
    const name = document.getElementById('name').value;
    const accountNumber = document.getElementById('accountNumber').value;
    const ifscCode = document.getElementById('ifscCode').value;
    const balance = document.getElementById('balance').value;
    const aadhaar = document.getElementById('aadhaar').value;
    const pan = document.getElementById('pan').value;

    // Basic validation
    if (ssn.length !== 9 || !/^\d+$/.test(ssn)) {
        displayMessage("Error: SSN must be 9 digits.", "error");
        return false;
    }

    // Save customer data in localStorage (temporary storage)
    const customerData = {
        ssn: ssn,
        name: name,
        accountNumber: accountNumber,
        ifscCode: ifscCode,
        balance: balance,
        aadhaar: aadhaar,
        pan: pan
    };
    localStorage.setItem('customer', JSON.stringify(customerData));

    // Show a success message
    displayMessage("Customer Registration Successful!", "success");

    // Make SSN field readonly after registration
    document.getElementById('ssn').readOnly = true;

    return false; // Prevent form submission
}



// View customer details before updating
function viewDetails() {
    const customerData = JSON.parse(localStorage.getItem('customer'));

    if (customerData) {
        // Display customer data
        document.getElementById('displaySSN').textContent = customerData.ssn;
        document.getElementById('displayName').textContent = customerData.name;
        document.getElementById('displayAccount').textContent = customerData.accountNumber;
        document.getElementById('displayIFSC').textContent = customerData.ifscCode;
        document.getElementById('displayBalance').textContent = customerData.balance;
        document.getElementById('displayAadhaar').textContent = customerData.aadhaar;
        document.getElementById('displayPAN').textContent = customerData.pan;

        // Show customer details
        document.getElementById('customerDetails').classList.remove('hidden');
    } else {
        displayMessage("Error: No customer details available.", "error");
    }
}

// Enable and update customer details
function enableAndUpdateCustomer() {
    const formElements = document.getElementById('customerForm').elements;
    let isEditing = false;

    // Check if the form is already in "edit mode"
    for (let i = 0; i < formElements.length; i++) {
        if (formElements[i].readOnly === false && formElements[i].id !== 'ssn') {
            isEditing = true;
            break;
        }
    }

    if (!isEditing) {
        // If not editing, enable the fields for update
        for (let i = 0; i < formElements.length; i++) {
            if (formElements[i].id !== 'ssn') {
                formElements[i].readOnly = false;
            }
        }
        displayMessage("You can now edit the details.", "info");
    } else {
        // Save the updated values
        const name = document.getElementById('name').value;
        const accountNumber = document.getElementById('accountNumber').value;
        const ifscCode = document.getElementById('ifscCode').value;
        const balance = document.getElementById('balance').value;
        const aadhaar = document.getElementById('aadhaar').value;
        const pan = document.getElementById('pan').value;

        // Fetch the existing customer data from localStorage
        let customerData = JSON.parse(localStorage.getItem('customer'));

        // Update the customer data (except for SSN)
        customerData.name = name;
        customerData.accountNumber = accountNumber;
        customerData.ifscCode = ifscCode;
        customerData.balance = balance;
        customerData.aadhaar = aadhaar;
        customerData.pan = pan;

        // Save the updated data back to localStorage
        localStorage.setItem('customer', JSON.stringify(customerData));

        // Disable the fields again after saving
        for (let i = 0; i < formElements.length; i++) {
            if (formElements[i].id !== 'ssn') {
                formElements[i].readOnly = true;
            }
        }

        // Show success message and refresh the displayed details
        displayMessage("Customer details updated successfully!", "success");
        viewDetails();  // Refresh the details on the screen
    }
}

// View customer details before deleting
function viewDetailsBeforeDelete() {
    const customerData = JSON.parse(localStorage.getItem('customer'));

    if (customerData) {
        // Display customer data
        document.getElementById('displaySSN').textContent = customerData.ssn;
        document.getElementById('displayName').textContent = customerData.name;
        document.getElementById('displayAccount').textContent = customerData.accountNumber;
        document.getElementById('displayIFSC').textContent = customerData.ifscCode;
        document.getElementById('displayBalance').textContent = customerData.balance;
        document.getElementById('displayAadhaar').textContent = customerData.aadhaar;
        document.getElementById('displayPAN').textContent = customerData.pan;

        // Show customer details and delete confirmation
        document.getElementById('customerDetails').classList.remove('hidden');
        document.getElementById('deleteConfirmation').classList.remove('hidden');
    } else {
        displayMessage("Error: No customer details available for deletion.", "error");
    }
}

// Delete the customer data
function deleteCustomer() {
    // Remove customer data from localStorage
    localStorage.removeItem('customer');

    // Clear the form fields
    const formElements = document.getElementById('customerForm').elements;
    for (let i = 0; i < formElements.length; i++) {
        formElements[i].value = '';
        formElements[i].readOnly = false; // Allow re-entry of data
    }

    // Hide the customer details and delete confirmation
    document.getElementById('customerDetails').classList.add('hidden');
    document.getElementById('deleteConfirmation').classList.add('hidden');

    // Show success message
    displayMessage("Customer details have been deleted successfully.", "success");
}



function viewDetailsBeforeDelete() {
    const customerData = JSON.parse(localStorage.getItem('customer'));

    if (customerData) {
        // Display customer data
        document.getElementById('displaySSN').textContent = customerData.ssn;
        document.getElementById('displayName').textContent = customerData.name;
        document.getElementById('displayAccount').textContent = customerData.accountNumber;
        document.getElementById('displayIFSC').textContent = customerData.ifscCode;
        document.getElementById('displayBalance').textContent = customerData.balance;
        document.getElementById('displayAadhaar').textContent = customerData.aadhaar;
        document.getElementById('displayPAN').textContent = customerData.pan;

        // Show customer details and delete confirmation
        document.getElementById('customerDetails').classList.remove('hidden');
        document.getElementById('deleteConfirmation').classList.remove('hidden');
    } else {
        displayMessage("Error: No customer details available for deletion.", "error");
    }
}

// Delete the customer data
function deleteCustomer() {
    // Remove customer data from localStorage
    localStorage.removeItem('customer');

    // Clear the form fields
    const formElements = document.getElementById('customerForm').elements;
    for (let i = 0; i < formElements.length; i++) {
        formElements[i].value = '';
        formElements[i].readOnly = false; // Allow re-entry of data
    }

    // Hide the customer details and delete confirmation
    document.getElementById('customerDetails').classList.add('hidden');
    document.getElementById('deleteConfirmation').classList.add('hidden');

    // Show success message
    displayMessage("Customer details have been deleted successfully.", "success");
}

// Display messages
function displayMessage(msg, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = msg;
    messageDiv.className = type; // success or error
    setTimeout(() => messageDiv.textContent = '', 5000); // Clear after 5 seconds
}

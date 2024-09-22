// Register customer function
function registerCustomer(event) {
    // Prevent form from submitting the default way
    event.preventDefault();

    // Get form data
    const ssn = document.getElementById('ssn').value;
    const name = document.getElementById('name').value;
    const accountNumber = document.getElementById('accountNumber').value;
    const ifscCode = document.getElementById('ifscCode').value;
    const balance = document.getElementById('balance').value;
    const aadhaar = document.getElementById('aadhaar').value;
    const pan = document.getElementById('pan').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const maritalStatus = document.getElementById('maritalStatus').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const contactNumber = document.getElementById('contactNumber').value;

    // Create customer data object
    const customerData = {
        ssn, name, accountNumber, ifscCode, balance, aadhaar, pan, dob, gender,
        maritalStatus, email, address, contactNumber
    };

    // Simulate saving the data (e.g., save to local storage for now)
    localStorage.setItem('customer', JSON.stringify(customerData));

    // Display success message
    document.getElementById('message').textContent = "Customer Registration Successful!";
    document.getElementById('message').style.color = "green";
}

// View customer details
function viewDetails() {
    const customerData = JSON.parse(localStorage.getItem('customer'));

    if (customerData) {
        document.getElementById('displaySSN').textContent = customerData.ssn;
        document.getElementById('displayName').textContent = customerData.name;
        document.getElementById('displayAccount').textContent = customerData.accountNumber;
        document.getElementById('displayIFSC').textContent = customerData.ifscCode;
        document.getElementById('displayBalance').textContent = customerData.balance;
        document.getElementById('displayAadhaar').textContent = customerData.aadhaar;
        document.getElementById('displayPAN').textContent = customerData.pan;
        document.getElementById('displayDOB').textContent = customerData.dob;
        document.getElementById('displayGender').textContent = customerData.gender;
        document.getElementById('displayMaritalStatus').textContent = customerData.maritalStatus;
        document.getElementById('displayEmail').textContent = customerData.email;
        document.getElementById('displayAddress').textContent = customerData.address;
        document.getElementById('displayContact').textContent = customerData.contactNumber;

        document.getElementById('customerDetails').classList.remove('hidden');
    } else {
        displayMessage("No customer data found", "error");
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
        // Update form values with current customer data
        document.getElementById('name').value = customerData.name;
        document.getElementById('accountNumber').value = customerData.accountNumber;
        document.getElementById('ifscCode').value = customerData.ifscCode;
        document.getElementById('balance').value = customerData.balance;
        document.getElementById('aadhaar').value = customerData.aadhaar;
        document.getElementById('pan').value = customerData.pan;
        document.getElementById('dob').value = customerData.dob;
        document.getElementById('gender').value = customerData.gender;
        document.getElementById('maritalStatus').value = customerData.maritalStatus;
        document.getElementById('email').value = customerData.email;
        document.getElementById('address').value = customerData.address;
        document.getElementById('contactNumber').value = customerData.contactNumber;

        let customerData = JSON.parse(localStorage.getItem('customer'));

        customerData.name = name;
        customerData.accountNumber = accountNumber;
        customerData.ifscCode = ifscCode
        customerData.balance = balance;
        customerData.aadhaar = aadhaar;
        customerData.pan = pan;
        customerData.dob = dob;
        customerData.gender = gender;
        customerData.maritalStatus = maritalStatus;
        customerData.email = email;
        customerData.address = address;
        customerData.contactNumber = contactNumber;


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

// Delete customer
function deleteCustomer() {
    if (confirm("Are you sure you want to delete this customer?")) {
        localStorage.removeItem('customer');
        document.getElementById('customerDetails').classList.add('hidden');
        displayMessage("Customer deleted successfully", "success");
    } else {
        displayMessage("Customer deletion canceled", "info");
    }
}

// Display success or error message
function displayMessage(message, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;

    if (type === "success") {
        messageDiv.style.color = "green";
    } else if (type === "error") {
        messageDiv.style.color = "red";
    } else if (type === "info") {
        messageDiv.style.color = "blue";
    }
}

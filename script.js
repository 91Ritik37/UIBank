let registeredEmployee = {};

function registerEmployee() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const contactNumber = document.getElementById('contactNumber').value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if (!passwordRegex.test(password)) {
        alert("Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, 1 special character, and be at least 8 characters long.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    }

    if (contactNumber.length !== 10) {
        alert("Contact Number must be 10 digits!");
        return false;
    }

    const employeeId = Math.floor(1000000 + Math.random() * 9000000);

    // Store registration details
    registeredEmployee = {
        employeeId: employeeId.toString(),
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    };

    // Fill the Employee ID field
    document.getElementById('employeeId').value = employeeId;

    // Hide the form and display acknowledgment screen
    document.getElementById('registrationForm').classList.add('hidden');

    document.getElementById('acknowledgmentScreen').classList.remove('hidden');

    // Display the data on the acknowledgment screen
    document.getElementById('displayEmployeeId').textContent = employeeId;
    document.getElementById('displayName').textContent = `${firstName} ${lastName}`;
    document.getElementById('displayEmail').textContent = email;

    return false; // Prevent default form submission
}

function goToLogin() {
    // Store registration details in localStorage for access on login page
    localStorage.setItem("registeredEmployee", JSON.stringify(registeredEmployee));
    window.location.href = "login.html";
}

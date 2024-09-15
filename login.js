function loginEmployee() {
    const storedEmployee = JSON.parse(localStorage.getItem("registeredEmployee"));
    const enteredEmployeeId = document.getElementById('loginEmployeeId').value;
    const enteredPassword = document.getElementById('loginPassword').value;

    if (!storedEmployee) {
        alert("No employee found! Please register first.");
        return false;
    }

    if (enteredEmployeeId === storedEmployee.employeeId && enteredPassword === storedEmployee.password) {
        document.getElementById('loginResult').textContent = `Welcome, ${storedEmployee.firstName} ${storedEmployee.lastName}!`;
        document.getElementById('loginMessage').classList.remove('hidden');
        window.location.href = "Home.html";
        sessionStorage.setItem("currentUser", `${storedEmployee.firstName} ${storedEmployee.lastName}!`);
    } else {
        document.getElementById('loginResult').textContent = "Invalid Employee ID or Password!";
        document.getElementById('loginMessage').classList.remove('hidden');
    }

    return false; // Prevent default form submission


}



const currentUser = sessionStorage.getItem('currentUser');
if (currentUser) {
    document.getElementById('currentUser').textContent = currentUser;
} else {
    window.location.href = "register.html";
}


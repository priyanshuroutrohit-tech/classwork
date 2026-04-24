// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Get user data from localStorage
function getUsers() {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
}

// Save users to localStorage
function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

// Check if user is logged in
function isLoggedIn() {
    return localStorage.getItem('isLoggedIn') === 'true';
}

// Get current logged in user
function getCurrentUser() {
    const currentUserEmail = localStorage.getItem('currentUserEmail');
    if (!currentUserEmail) return null;
    
    const users = getUsers();
    return users.find(user => user.email === currentUserEmail) || null;
}

// Set login state
function setLoginState(email) {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('currentUserEmail', email);
}

// Clear login state
function clearLoginState() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUserEmail');
}

// Validate email format
function validateEmail(email) {
    return EMAIL_REGEX.test(email);
}

// Show error message
function showError(elementId, message) {
    const errorEl = document.getElementById(elementId);
    if (errorEl) {
        errorEl.textContent = message;
        errorEl.style.display = 'block';
    }
}

// Clear error message
function clearError(elementId) {
    const errorEl = document.getElementById(elementId);
    if (errorEl) {
        errorEl.textContent = '';
        errorEl.style.display = 'none';
    }
}

// Show alert
function showAlert(elementId, message) {
    const alertEl = document.getElementById(elementId);
    if (alertEl) {
        alertEl.textContent = message;
        alertEl.style.display = 'block';
    }
}

// Hide alert
function hideAlert(elementId) {
    const alertEl = document.getElementById(elementId);
    if (alertEl) {
        alertEl.style.display = 'none';
    }
}
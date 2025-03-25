// app.js

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    // Get references to the assessment buttons
    const insuranceButton = document.getElementById('insuranceRisk');
    const mortgageButton = document.getElementById('mortgageRisk');

    // Event listener for Insurance Risk Assessment button
    insuranceButton.addEventListener('click', () => {
        // Navigate to the Insurance Risk Assessment page
        window.location.href = '../../public/insurance/insurance-assessment.html';
    });

    // Event listener for Mortgage Risk Assessment button
    mortgageButton.addEventListener('click', () => {
        // Navigate to the Mortgage Risk Assessment page
        window.location.href = '../../public/mortgage/mortgage-assessment.html';
    });
});

// Function to store user responses in local storage
function storeUserResponse(key, value) {
    localStorage.setItem(key, value);
}

// Function to retrieve user responses from local storage
function getUserResponse(key) {
    return localStorage.getItem(key);
}

// Example usage of storing user responses
// storeUserResponse('age', userAge);
// const userAge = getUserResponse('age');
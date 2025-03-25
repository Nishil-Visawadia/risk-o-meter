// risk-calculator.js

// Function to calculate risk based on user demographics
function calculateRisk(demographics) {
    let totalRisk = 0;

    // Calculate age risk
    totalRisk += calculateAgeRisk(demographics.age);

    // Calculate gender risk
    totalRisk += calculateGenderRisk(demographics.gender);

    // Calculate marital status risk
    totalRisk += calculateMaritalStatusRisk(demographics.maritalStatus);

    // Calculate location risk
    totalRisk += calculateLocationRisk(demographics.location);

    return totalRisk;
}

// Function to calculate age risk
function calculateAgeRisk(age) {
    if (age >= 18 && age <= 25) return 6; // 6% out of 10%
    if (age >= 26 && age <= 35) return 5; // 5% out of 10%
    if (age >= 36 && age <= 45) return 7; // 7% out of 10%
    if (age >= 46 && age <= 55) return 8; // 8% out of 10%
    if (age >= 56 && age <= 65) return 9; // 9% out of 10%
    if (age > 65) return 10; // 10% out of 10%
    return 0; // Default case
}

// Function to calculate gender risk
function calculateGenderRisk(gender) {
    if (gender === 'Male') return 5; // 5% out of 5%
    if (gender === 'Female') return 3; // 3% out of 5%
    return 0; // Default case
}

// Function to calculate marital status risk
function calculateMaritalStatusRisk(status) {
    switch (status) {
        case 'Married (Dual Income Household)':
            return 2; // 2% out of 5%
        case 'Married (Single Earner Household)':
            return 3; // 3% out of 5%
        case 'Unmarried':
            return 4; // 4% out of 5%
        case 'Divorced/Separated/Widowed':
            return 5; // 5% out of 5%
        default:
            return 0; // Default case
    }
}

// Function to calculate location risk
function calculateLocationRisk(location) {
    switch (location) {
        case 'Mahim':
            return 10; // 10% out of 10%
        case 'Dadar':
            return 6; // 6% out of 10%
        case 'Prabhadevi':
            return 3; // 3% out of 10%
        default:
            return 0; // Default case
    }
}

// Function to store user responses in local storage
function storeUserResponses(demographics) {
    localStorage.setItem('riskDemographics', JSON.stringify(demographics));
}

// Function to retrieve user responses from local storage
function getUserResponses() {
    const data = localStorage.getItem('riskDemographics');
    return data ? JSON.parse(data) : null;
}
# Risk-o-Meter

## Overview

Risk-o-Meter is a Progressive Web App (PWA) designed to assess insurance and mortgage risks based on user demographics. The app provides a user-friendly interface with a minimalist design and a pastel color palette, ensuring a pleasant user experience.
Risk-o-Meter is a Progressive Web App (PWA) designed to assess insurance and mortgage risks based on user demographics. The app provides a user-friendly interface with a minimalist design and a pastel color palette, ensuring a pleasant user experience.

## Features

- **Insurance Risk Assessment**: Users can evaluate their insurance risk through a series of demographic questions.
- **Mortgage Risk Assessment**: Similar to the insurance assessment, users can also evaluate their mortgage risk.
- **Local Storage**: User responses are stored locally for later evaluation.ough a series of demographic questions.
- **Responsive Design**: The app is designed to work seamlessly on various devices. evaluate their mortgage risk.
- **Local Storage**: User responses are stored locally for later evaluation.

## **Technologies Used**: The app is designed to work seamlessly on various devices

- HTML
- Tailwind CSS Used
- JavaScript
- Progressive Web App (PWA) standards

## Project Structurep (PWA) standards

```readme
risk-o-metertructure
├── public
│   ├── index.html                  # Main HTML file
│   ├── manifest.json               # PWA metadata
│   ├── service-worker.js           # Service worker for offline functionality
│   ├── icons                       # Icons for PWAest.json       # PWA metadata
│   │   ├── icon-192x192.png        # Icon for home screenffline functionality
│   │   └── icon-512x512.png        # Larger icon for various contexts
│   └── insurance                   # Insurance-related pages ├── icon-192x192.png # Icon for home screen
│       ├── insurance-assessment.html # Insurance Risk Assessment page icon-512x512.png # Larger icon for various contexts
│       ├── income-stability.html   # Income Stability Assessment page
│       ├── medical-health.html     # Medical Health Assessment pages
│       └── risk-score.html         # Risk Score display page
├── src
│   ├── css and navigation
│   │   └── styles.css              # Tailwind CSS and custom styles calculation and local storage
│   ├── jsation
│   │   ├── app.js                  # Application initialization and navigation
│   │   └── risk-calculator.js      # Logic for risk calculation and local storage README.md               # Project documentation
├── tailwind.config.js              # Tailwind CSS configuration└── .gitignore              # Files to ignore in version control
├── package.json                    # npm configuration
├── .gitignore                      # Files to ignore in version control
├── README.md                       # Project documentationup Instructions
└── node_modules/                   # Node.js dependencies (ignored in version control)
```

## Setup Instructions

1. Clone the repository: project directory:

   ```cmd
   git clone <repository-url>
   ```

2. Navigate to the project directory:endencies:

    ```cmd
   cd risk-o-meter
   ```

3. Install dependencies:ject (if necessary):

   ```cmd
   npm install
   ```

4. Build the project (if necessary): development server:

    ```cmd
   npm run build
   ```

5. Start the development server:

   ```cmd
   npm start.
   ```

## Usage assessment results based on your inputs

- Open the app in a web browser or install it on your device.
- Choose between "Insurance Risk Assessment" or "Mortgage Risk Assessment."## Contribution
- Follow the prompts to complete the demographic questions.ons are welcome! Please submit a pull request or open an issue for any suggestions or improvements.
- View your risk assessment results based on your inputs.

This project is licensed under the MIT License. See the LICENSE file for details.## LicenseContributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.## Contribution## License
This project is licensed under the MIT License. See the LICENSE file for details.

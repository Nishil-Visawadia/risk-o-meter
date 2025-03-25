# Risk-o-Meter

## Overview
Risk-o-Meter is a Progressive Web App (PWA) designed to assess insurance and mortgage risks based on user demographics. The app provides a user-friendly interface with a minimalist design and a pastel color palette, ensuring a pleasant user experience.

## Features
- **Insurance Risk Assessment**: Users can evaluate their insurance risk through a series of demographic questions.
- **Mortgage Risk Assessment**: Similar to the insurance assessment, users can also evaluate their mortgage risk.
- **Local Storage**: User responses are stored locally for later evaluation.
- **Responsive Design**: The app is designed to work seamlessly on various devices.

## Technologies Used
- HTML
- Tailwind CSS
- JavaScript
- Progressive Web App (PWA) standards

## Project Structure
```
risk-o-meter
├── public
│   ├── index.html          # Main HTML file
│   ├── manifest.json       # PWA metadata
│   ├── service-worker.js    # Service worker for offline functionality
│   └── icons
│       ├── icon-192x192.png # Icon for home screen
│       └── icon-512x512.png # Larger icon for various contexts
├── src
│   ├── css
│   │   └── styles.css      # Tailwind CSS and custom styles
│   ├── js
│   │   ├── app.js          # Application initialization and navigation
│   │   └── risk-calculator.js # Logic for risk calculation and local storage
├── tailwind.config.js      # Tailwind CSS configuration
├── package.json            # npm configuration
├── README.md               # Project documentation
└── .gitignore              # Files to ignore in version control
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd risk-o-meter
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Build the project (if necessary):
   ```
   npm run build
   ```
5. Start the development server:
   ```
   npm start
   ```

## Usage
- Open the app in a web browser or install it on your device.
- Choose between "Insurance Risk Assessment" or "Mortgage Risk Assessment."
- Follow the prompts to complete the demographic questions.
- View your risk assessment results based on your inputs.

## Contribution
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
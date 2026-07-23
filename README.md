# Flight Booking Automation

## Overview

This repository contains automated end-to-end tests for a Flight Booking web application using **Playwright** with **TypeScript**. The framework follows the **Page Object Model (POM)** design pattern for better maintainability and scalability.

## Tech Stack

* Playwright
* TypeScript
* Node.js
* Excel (`xlsx`) for test data management

## Project Structure

```text
FlightBooking/
│
├── pages/              # Page Object classes
├── tests/              # Test scripts
├── utils/              # Utility classes (Excel Reader, helpers, etc.)
├── testData/           # Excel test data files
├── playwright.config.ts
├── package.json
└── README.md
```

## Features

* Page Object Model (POM)
* Data-driven testing using Excel
* Cross-browser support
* Easy-to-maintain project structure
* Playwright HTML reporting

## Prerequisites

* Node.js (v18 or later)
* npm

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd FlightBooking
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run a specific test:

```bash
npx playwright test tests/FlightBooking.spec.ts
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run tests in a specific browser:

```bash
npx playwright test --project=chromium
```

## Test Reports

Generate and open the HTML report:

```bash
npx playwright show-report
```

## Test Data

Test data is maintained in Excel files located in the `testData` folder.

Example:

```text
testData/
└── TravelPlanTestData.xlsx
```

## Utilities

The framework includes reusable utility classes such as:

* Excel Reader
* Common helper methods
* Reusable page actions

## Best Practices Followed

* Page Object Model (POM)
* Reusable utilities
* Separation of test logic and page actions
* Data-driven testing
* Readable and maintainable code

## Author

Developed as a Playwright automation framework for Flight Booking application testing.

# Playwright SauceDemo Test Suite

This project is an automated UI test suite for the SauceDemo storefront, built as I learned test automation. It uses the Page Object Model and Playwright's web-first assertions.

## Tech Stack

- **Playwright** (with the built-in test runner)
- **TypeScript**
- Target app: [SauceDemo](https://www.saucedemo.com)

## What It Tests

- Login: valid user, locked-out user, and wrong-password scenarios
- Inventory / products page after login

## Project Structure

```
pages/
  LoginPage.ts          Login page object
  InventoryPage.ts      Inventory / products page object
tests/
  fixtures.ts           Custom fixtures (a ready-to-use loginPage)
  login.spec.ts         Login scenarios
  inventory.spec.ts     Inventory / products checks
  flaky-login.spec.ts   Reliability practice (web-first assertions)
playwright.config.ts    Browsers, retries, reporter, tracing
```

## Running the Tests

```bash
npm install
npx playwright test                        # run all tests
npx playwright test --project=chromium     # one browser
npx playwright show-report                 # open the HTML report
```

## Skills Demonstrated

- Locators
- Playwright web-first assertions
- Page Object Model
- Test suite structure
- Fixing flaky tests (replacing hard waits)
- Debugging with the trace viewer

## Author

Eva Osorio — [LinkedIn](https://www.linkedin.com/in/evaosorio15/)
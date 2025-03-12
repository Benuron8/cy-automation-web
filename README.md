# cy-automation-web
This project contains end-to-end UI automation tests using Cypress for login/logout funcionalities.
The tests can be executed locally or inside a Docker container.

Prerequisites:
Git: To clone the repository.
Node.js (v14+ recommended): To install dependencies and run Cypress.
Docker (optional): For running tests in a containerized environment.
Cypress: For running the tests and generating reports.

git clone https://github.com/Benuron8/cy-automation-web.git
cd cy-automation-web

### Setup Cypress Environment Variables to run locally

1. Create a `cypress.env.json` to add your `email` and `password` (or any other required environment variables).
2. Run the tests locally using `npx cypress run` or in Docker using the provided Docker command.

{
  "email": "your-email@example.com",
  "password": "your-password"
}

#### Running locally
npm install

###### running with Cypress interactive mode (UI):
npx cypress open

###### running headlessly (without the UI) with chrome:
npx cypress run --browser chrome

#### Running with Docker
docker build -t cypress_automation .
docker run cypress-automation 

#### Running in GitHub Actions
open the repository in tab Actions and re-run the last job

#### Reports
Reports are being saved in folder cypress/reports: one html for each test file

###############################################################################

## Gherkin test cases

### Feature: Login/Logout Functionality
    
 ###### Background:
    Given the user is on the login page
    And the user accepts cookies
    

  ###### Scenario: User logs ui with valid credentials
    When the user enters a valid email and password
    And the user clicks the login button
    Then the user should be successfully logged in

  ###### Scenario: User fails to log in using valid email and invalid password
    When the user enters a valid email and invalid password
    And the user clicks the login button
    Then the user should see an error message "You have entered an incorrect username or password."

  ###### Scenario: User fails to log in using invalid credentials
    When the user enters a non-existing email and password
    And the user clicks the login button
    Then the user should see an error message "You have entered an incorrect username or password."

  ###### Scenario: User fails to log in with empty email
    Given the user leaves the email input field is empty
    When the user enters a valid password
    And the user clicks the login button
    Then the email and password fields should be cleared

  ###### Scenario: User fails to log in with empty password
    Given the user enters a valid email
    When the user leaves the password input field empty
    And the user clicks the login button
    Then the email and password fields should be cleared

### Feature: Logout Functionality

  ###### Scenario: User successfully logs out
    Given the user is logged in
    When the user hovers over the profile dropdown
    And the user clicks the logout button
    Then the user should be logged out successfully
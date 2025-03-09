# cy-automation-web

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

### Feature: Password Reset

  ###### Scenario: User fails password reset due to incorrect captcha
    Given the user is on the login page
    And the user clicks on "Forgot Password"
    When the user enters a valid email address and incorrect captcha code
    Then the system should display an error message "The text you've entered is incorrect"

## Running the tests

###### running each spec file in UI/authentication 
in command line run:
npx cypress run --spec "cypress/e2e/UI/authentication/login.spec.js"
npx cypress run --spec "cypress/e2e/UI/authentication/logout.spec.js"
npx cypress run --spec "cypress/e2e/UI/authentication/password-reset.spec.js"

###### running in a specific browser (example for chrome) 
in command line run: npx cypress run --spec "cypress/e2e/UI/authentication/login.spec.js" --browser chrome

###### running in docker with chrome
start docker desktop
in command line run: docker run -it --rm cypress-automation

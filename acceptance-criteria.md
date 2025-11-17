# User story validation criteria

## Scenario-oriented criteria (Given-When-Then)
- This is the most common format for acceptance criteria scenarios. It provides a structured way to define expected outcomes for each specific test case. 
	- Given: The initial state or context of the system before the user performs an action.
	- When: The action or event that the user initiates.
	- Then: The expected outcome or result of the action. 


### Examples
- User Story: "As a user, I want to log in to my account with my username and password so I can access my dashboard."
	- Scenario 1 (Successful login):
		- Given the user is on the login page
		- When the user enters a valid username and password and clicks "Log In"
		- Then the user is redirected to their dashboard
	- Scenario 2 (Invalid password):
		- Given the user is on the login page
		- When the user enters a valid username and an invalid password and clicks "Log In"
		- Then an error message "Invalid username or password" is displayed
	- Scenario 3 (Empty fields):
		- Given the user is on the login page
		- When the user leaves the username and password fields empty and clicks "Log In"
		- Then an error message "Username and password are required" is displayed 

## Rule-oriented criteria (checklist)
- This format is a straightforward list of requirements that must all be met for the story to be complete. 
- Format: A simple bulleted list of specific conditions. 
- Example
	- User Story: "As an administrator, I want to be able to view a list of all active users."
	- Criteria:
		- The list must be accessible from the administrator dashboard.
		- The list must only show users with the "active" status.
		- The list must be sorted alphabetically by username by default.
		- There must be a search bar to filter the list by username. 
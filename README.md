## Commands

Running locally:

```bash
yarn dev
```

Running in production:

```bash
yarn start
```

Testing:

```bash
# run all tests
yarn test

# run all tests in watch mode
yarn test:watch

# run test coverage
yarn coverage
```

Linting:

```bash
# run ESLint
yarn lint

# fix ESLint errors
yarn lint:fix

# run prettier
yarn prettier

# fix prettier errors
yarn prettier:fix
```

## Environment Variables

The environment variables can be found and modified in the `.env` file. They come with these default values:

```bash
# Port number
PORT=3000

# URL of the Mongo DB
MONGODB_URL=mongodb://127.0.0.1:27017/yourdbname

# JWT
# JWT secret key
JWT_SECRET=thisisasamplesecret
# Number of minutes after which an access token expires
JWT_ACCESS_EXPIRATION_MINUTES=30
# Number of days after which a refresh token expires
JWT_REFRESH_EXPIRATION_DAYS=30

# SMTP configuration options for the email service
# For testing, you can use a fake SMTP service like Ethereal: https://ethereal.email/create
SMTP_HOST=email-server
SMTP_PORT=587
SMTP_USERNAME=email-server-username
SMTP_PASSWORD=email-server-password
EMAIL_FROM=support@yourapp.com

#rhino url
RHINO_URL =aws_endpoint
RHINO_KEY = rhino_api_key
RHINO_PLOT_PATH_PREFIX=D:

# Stripe configuration
STRIPE_KEY = sk_test_samplekey

#frontend url
FRONTEND_HOST = aws_hosted_url
FRONTEND_PORT = 3000

#googleLogin
CLIENT_ID = google_client_id
```
## Project Structure
src/
	config/(Third party API, logger, tokens, etc. ‘s keys and other configuration)
	controllers/(controller to be called from route file)
	docs/(API documentation)
	middleware/(middleware to be used from route)
	models/ (schema defination)
	routes/ (router file to be called form server file)
	services/ (functions to be called from controller)
	utils/ (common functions to use across entire function)
	validations/ (input validations)
	js/
		app.js
		index.js

## Coding standards

# 1.	General standards: 
•	Use const and let instead of var.
•	Create reusable functions which are frequently used across application.
•	Maintain file length, it should be too lengthy, instead create chunk of functions to be called.
•	Use maximum utility of ES6.
•	Use sanitary to check for API health.
•	Always write tests for your code.
•	Create README.md file and put required information to run your project.


# 2.	Naming convention:
•	Use same naming convention across whole project. Like camel case for file name and function name, variable name could be camel case or snake case. (use same for all variable)
•	Variable & function name should be self descriptive.


# 3.	GIT: 
•	Create separate branch based on modules and push code regularly.(DO NOT COMMIT TO MASTER DIRECTLY)
•	Always take pull before pushing code and creating PR.


# 4.	Package:
•	Use standard third party library which provides regular updates and is not deprecated.


# 5.	Imports:
•	Third party package should be first in import, then files or function to import.


# 6.	Documentation:
•	Create API documentation dynamically using swagger or any other library.




This project was bootstrapped with Create React App for the frontend and Express generator for the Nodejs backend.

This is a simple 3- tier web application which can be used to schedule activities. The application consists of a Frontend React application, Backend (Node js, Express js) and a Relational database - PostgreSQL.

Clone or download the repository folder 
Open with your favourite IDE


Backend
run npm install to install all the dependencies. 
Note: ensure node js already installed.

Available Scripts
In the project directory, you can run:

npm run dev
Runs the app in the development mode.
Open http://localhost:4000 to view it in the browser.

Frontend

run npm install to install all the dependencies. 
Note: ensure that you have Node js already installed.
Here is a link to install Node js: https://nodejs.org/en/
Available Scripts
In the project directory, run:

npm start

This command runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload when any changes are made and would update accordingly.
Lint errors are also displayed in the console.


Application Functionalities

This application allows four different activities mainly Mowing, Fertilisation, Irrigation and Aeration. Users are able to schedule any of these activities and specifying to whom the task is assigned to and also the date and time for every task.

Basic features/functionalities (eg update, delete) are also made available to allow for flexibility and better user experience.


Deploying to AWS

To deploy this application to the cloud (preferably AWS): 
Using AWS Amplify as this provides every infrastructure needed to host the application on the cloud.

Log in to AWS console and navigate to the Amplify console through the search option.
Choose the Frontend environments tab / Host web app option, select a Git provider (in this case GitHub), click continue.
Next click on authorise, select  the target repository then click on install and authorize.
Follow the steps in the Amplify console to choose the branch to connect with, and deploy the application. 
Four green checkmarks for Provision, Build, Deploy and Verify would be displayed when the deployment is successful👏.


Next steps

This application was created without any tests.
For this application to be production ready,

Tests (Unit and Integration tests) should be written for both the Frontend and Backend application.

Form input validation should also be implemented.
Look out for security loopholes:
 example
User sends html and script tags through the form input fields which might contain malicious codes that could disrupt the database.
It is essential to lookout for potential security threats and endeavour to mitigate them.


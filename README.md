# Program-Planner
Summer Engagement Program Planner
----------------------------------
The goal of this project is to create a web app to assist with planning a multi-session event like  Training Engagement Program. This project will focus on critical aspects of full-stack web development such as user access & security, server-side and client-side development, and UI/UX considerations.

Functional Requirements
------------------------
1. Users must be authenticated & authorized to be able to access the website.
2. A user must be able to create an event session.
3. A user must be able to edit an event session.
4. A user must be able to delete an event session.
5. A user must be able to see the number of attendees for each session.
6. A session must include a date & time, a title, and a description.

Non-Functional Requirements
---------------------------
1. Front-end code - React. 
2. Server-side code - Php.
3. Database - MySQL

Database:
---------
1. Download xampp and start MySQL and Apache services.
2. Enable localhost over SSH.
2. Create database using phpmyadmin in localhost.

Client Side: 
------------
1. Install NodeJS https://nodejs.org/en/
2. Create folder inside the htdocs of xampp for the frontend code part.
3. Install React using -> npm install -g create-react-app
4. Create project using -> create-react-app projectname
5. In terminal, cd projectname then start the server using -> npm start
6. Install bootstrap framework for UI framework using -> npm install bootstrap --save
7. Install vanilla bootstrap for customizing the sass file using -> npm install react-bootstrap bootstrap
8. Install React router module to enable router service using -> npm install --save react-router-dom
9. For users authentication & authorization using Axios to send API calls and handle JWT tokens.

Unit Testing:
-------------
1. Unit testing with Jest and React testing (already installed with creat-react-app).
2. Install flow-bin for type checking using --> npm install --save-dev flow-bin
3. Add a "flow" script to your package.json file.
4. For congif intall --> npm run flow init
5. Install enzyme library using --> npm install --save enzyme react-test-renderer enzyme-adapter-react-16

Server-side:
------------
1. Create folder inside htdocs of xampp for php code part.
2. Building the PHP application that implements the JWT-protected REST API.
3. Install composer globally
4. For Authentication: Install the php-jwt library using Composer in your root folder --> composer require firebase/php-jwt 
5. For Password reset mail: Install the PHPMailer using composer --> composer require phpmailer/phpmailer
6. Inorder to use the php mailer to send mail to your account without authentication issue, turn on the setting of "Access for less secure apps" in your security section of google account.

Website Demo:
-------------
Check the ProjectDemo file to view the project demo.

Client-side - UI:
---------------
1. Welcome page:
![](Screenshots-UI/Screen%20Shot%202020-07-13%20at%204.46.22%20PM.png)

2. Signup page:
![](Screenshots-UI/Screen%20Shot%202020-07-13%20at%204.54.17%20PM.png)

3. Login page:
![](Screenshots-UI/Screen%20Shot%202020-07-13%20at%204.52.14%20PM.png)

4. Login with error message for wrong credential:
![](Screenshots-UI/Screen%20Shot%202020-07-13%20at%204.52.25%20PM.png)

4. Forgot Password:
![](Screenshots-UI/Screen%20Shot%202020-07-13%20at%204.52.44%20PM.png)

5. Email from website:
![](Screenshots-UI/Screen%20Shot%202020-07-13%20at%204.53.26%20PM.png)

6. Reset password:
![](Screenshots-UI/Screen%20Shot%202020-07-13%20at%204.53.47%20PM.png)

6. User's Dashboard (for interns): Listed events to register
![](Screenshots-UI/Screen%20Shot%202020-07-13%20at%204.51.14%20PM.png)

7. User's Registered List (for interns): After registering available events
![](Screenshots-UI/Screen%20Shot%202020-07-13%20at%204.51.32%20PM.png)

8. Admin's home Page: To view the attendees list for each event along with edit and delete
![](Screenshots-UI/Screen%20Shot%202020-07-13%20at%204.54.42%20PM.png)

9. Admin's Event create page:
![](Screenshots-UI/Screen%20Shot%202020-07-13%20at%204.56.02%20PM.png)

10. Admin's Event update page:
![](Screenshots-UI/Screen%20Shot%202020-07-13%20at%204.56.15%20PM.png)

11. Admin's home Page: after creating new event, the attendees is zero because no user registered for it.
![](Screenshots-UI/Screen%20Shot%202020-07-13%20at%204.56.29%20PM.png)

Database Screenshots:
---------------------
DB: Planner
![](Screenshots-UI/Screen%20Shot%202020-07-13%20at%205.24.18%20PM.png)

![](Screenshots-UI/Screen%20Shot%202020-07-13%20at%205.24.31%20PM.png)

![](Screenshots-UI/Screen%20Shot%202020-07-13%20at%205.24.39%20PM.png)


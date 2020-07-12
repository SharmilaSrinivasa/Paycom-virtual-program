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
Check the WebsiteDemo file to view the project demo.

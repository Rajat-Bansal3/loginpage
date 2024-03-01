# Login and Registration Page Project

Welcome to the Login and Registration Page project! This project is designed to provide a secure and user-friendly authentication system using ReactJS for the frontend, Node.js with Express for the backend, and MySQL for the database.

## Features

### Login Page
- Input fields for username and password
- Login button
- Registration link

### Registration Page
- Input fields for name, date of birth (with a date picker), gender (radio buttons), phone number (10 digits only), email address, state (dropdown list), password (must contain at least one number, one capital letter, one special character, and be 8 characters long), and confirm password.

## Technologies Used

- **Frontend:** ReactJS
- **Backend:** Node.js with Express
- **Database:** MySQL

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Rajat-Bansal3/loginpage.git
   ```
2. change directory to cloned repository:
    ```bash
    cd loginpage
    ```
3. install packages in both folders:
   ```bash
   cd client
   npm i
   cd ..
   cd backend
   npm i
   ```
4. run both servers:
    ```bash
    cd client
    npm run dev
    cd ..
    cd backend
    npm run dev
    ```
5. make a sql database named users with the following table structure : 
    ```SQL
    +----------+--------+------+-----+---------+-------+
    | Field    | Type   | Null | Key | Default | Extra |
    +----------+--------+------+-----+---------+-------+
    | name     | text   | YES  |     | NULL    |       |
    | dob      | date   | YES  |     | NULL    |       |
    | gender   | text   | YES  |     | NULL    |       |
    | phone    | bigint | YES  |     | NULL    |       |
    | email    | text   | YES  |     | NULL    |       |
    | state    | text   | YES  |     | NULL    |       |
    | password | text   | YES  |     | NULL    |       |
    +----------+--------+------+-----+---------+-------+
    ```
good to go 


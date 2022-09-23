# Cookpedia

## Installation

- npm i

## What's in this app?

- REST API
- MySQL Database
- JSON Web Token
- Authentication and Authorization
- Data Secrure
- Data Validation

# Database Configuration

- The first of all that you have to do is install MySQL database on your computer (this only if you don't have MySQL database yet).
- Open **./config/dbConnection.js** and you will see the code like 1st method above.
- Change the value of **host**, **user** and **password** to your MySQL configuration. If you use another port for your MySQL you can add new **port** property on it.
- In the root project directory open your terminal and run `npm run migrate`. It will create the tables that needed.

# Environment Variables

- At the root project directory create new `.env` file.
- Add variable named `JWT_SECRET_KEY`.
- Insert value of the `JWT_SECRET_KEY` variable with value whatever you want. E.g: `JWT_SECRET_KEY=mySecretKey`.

# Run The App

- In the root directory you can run `npm start` on your terminal.
- The server uses port: `3001` and it will be running on [http://localhost:3001](http://localhost:3001).

# 📊 Modern Expense Tracker

[<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5 Badge"/>](https://en.wikipedia.org/wiki/HTML5)
[<img src="https://img.shields.io/badge/EJS-A91E50?style=for-the-badge&logo=javascript&logoColor=white" alt="EJS Badge"/>](https://ejs.co/)
[<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS Badge"/>](https://tailwindcss.com/)
[<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js Badge"/>](https://nodejs.org/)
[<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js Badge"/>](https://expressjs.com/)
[<img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB Badge"/>](https://www.mongodb.com/)
[<img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="JWT Badge"/>](https://jwt.io/)

A sleek, full-stack web application for tracking personal expenses, now with **secure user accounts**. Built with a modern tech stack, this project features a server-rendered interface, a robust backend API, and a secure authentication system.

<br>

[![View Live Demo](https://img.shields.io/badge/View_Live_Demo-2563EB?style=for-the-badge&logo=rocket&logoColor=white)](https://expense-tracker-sl0v.onrender.com)
*(Note: Use a demo account or register a new user to test the application.)*

<br>

## ✨ Core Features

### Expense Management
* **Dynamic Dashboard**: Instantly add expenses with a description, amount, and category.
* **Real-time Updates**: The total balance and expense list update automatically without page reloads.
* **Complete History**: View a chronological list of all past expenses.
* **Effortless Deletion**: Remove single expenses with a click.
* **Total Reset**: A secure, confirmation-based option to wipe the slate clean.

### Authentication & Security
* **User Registration & Login**: Secure account creation and login system.
* **Secure JWT Authentication**: Uses JSON Web Tokens stored in `httpOnly` cookies for secure, stateless sessions.
* **Password Hashing**: User passwords are encrypted using `bcryptjs` and are never stored in plain text.
* **Protected Routes**: All user data and expense pages are protected, accessible only after logging in.
* **Personalized Data**: Each user can only view and manage their own expenses.

---

## 🛠️ Technology Stack

This project utilizes a modern, full-stack architecture:

* **Frontend & Views**:
    * `HTML5`
    * `EJS (Embedded JavaScript)` for server-side rendering of dynamic pages.
    * `Tailwind CSS` for utility-first styling.
    * `JavaScript (ES6+)` for client-side interactivity and API communication.
* **Backend**:
    * `Node.js` as the JavaScript runtime environment.
    * `Express.js` for building the robust API and serving pages.
    * `jsonwebtoken` for creating and verifying JWTs.
    * `cookie-parser` for handling `httpOnly` cookies.
    * `bcryptjs` for secure password hashing.
* **Database**:
    * `MongoDB` as the NoSQL database.
    * `Mongoose` for elegant data modeling.

---

## ⚙️ How It Works

The application follows a classic server-side rendering pattern with a RESTful API for data.

1.  **View (Server)**: When a user requests a page like `/login` or `/tracker`, the Express server uses EJS to render the appropriate `.ejs` file from the `views` folder, sending a complete HTML page to the browser.
2.  **Authentication Middleware**: Protected routes are guarded by middleware that checks for a valid JWT in the user's cookies. If the token is valid, the user can proceed; otherwise, they are redirected to the login page.
3.  **Client-Side Script**: Once a page is loaded, client-side JavaScript takes over for interactivity. It captures events (like form submissions) and sends requests to the backend API endpoints using `fetch`.
4.  **API Routes & Controllers**: The Express API receives these requests, and a controller function processes the business logic, interacting with the database model.
5.  **Model**: The Mongoose model communicates with the MongoDB database to create, read, update, or delete records associated with the logged-in user.
6.  **Response**: The API sends data back to the client as JSON, and the client-side JavaScript updates the webpage dynamically.

---

## 📡 Routes & Endpoints

### Page Routes (Server-Rendered)

| Method | Endpoint   | Description                                           |
| :----- | :--------- | :---------------------------------------------------- |
| `GET`  | `/`        | Shows the main expense tracker page (if logged in).   |
| `GET`  | `/tracker` | Shows the main expense tracker page (if logged in).   |
| `GET`  | `/login`   | Shows the login page (redirects if already logged in). |
| `GET`  | `/register`| Shows the registration page (redirects if already logged in). |

### API Endpoints (JSON)

#### Authentication

| Method | Endpoint        | Description                   | Protected |
| :----- | :-------------- | :---------------------------- | :-------- |
| `POST` | `/api/register` | Creates a new user account.     | No        |
| `POST` | `/api/login`    | Logs in a user and sets the auth cookie. | No        |
| `POST` | `/api/logout`   | Logs out the user and clears the cookie. | Yes       |

#### Expenses

| Method   | Endpoint           | Description                                    | Protected |
| :------- | :----------------- | :--------------------------------------------- | :-------- |
| `GET`    | `/api/expenses`    | Fetches all expenses for the logged-in user.   | Yes       |
| `POST`   | `/api/expenses`    | Creates a new expense for the logged-in user.  | Yes       |
| `DELETE` | `/api/expenses/:id`| Deletes a single expense by its unique ID.     | Yes       |
| `DELETE` | `/api/expenses`    | Deletes all expenses for the logged-in user.   | Yes       |
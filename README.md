
---

# Dynamic One-Page Website with React and MySQL

This project is a dynamic one-page website built with React, Node.js, and MySQL. The website includes a banner with a countdown timer and an internal dashboard to control the banner's visibility, description, timer, and link. The project is designed with Tailwind CSS for a clean and attractive layout.

## Features

- **Dynamic Banner**: Optionally display a banner with a countdown timer that shows the remaining time before the banner disappears.
- **Internal Dashboard**: Control the banner's visibility, description, timer, and link.
- **Database Integration**: Store and retrieve banner data using MySQL, with the option to deploy on AWS RDS.

## Prerequisites

- Node.js
- npm or yarn
- MySQL (locally or via AWS RDS)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. **Backend Setup:**

   Navigate to the `backend` directory:

   ```bash
   cd backend
   ```

   Install dependencies:

   ```bash
   npm install
   ```

   Create a `.env` file in the `backend` directory and add your MySQL credentials:

   **`.env`**:
   ```plaintext
   DB_NAME=
   DB_USER=
   DB_PASSWORD=
   DB_HOST=
   ```

   Run the backend server:

   ```bash
   node server.js
   ```

3. **Frontend Setup:**

   Navigate to the `frontend` directory:

   ```bash
   cd ../frontend
   ```

   Install dependencies:

   ```bash
   npm install
   ```

   Run the frontend development server:

   ```bash
   npm start
   ```

## Deployment

To deploy the application, ensure your MySQL database is hosted (e.g., using AWS RDS) and the credentials in your `.env` file are correct.

## Project Structure

```plaintext
.
├── backend
│   ├── config
│   │   └── db.js          # Database connection setup
│   ├── models
│   │   └── Banner.js      # Sequelize model for Banner
│   ├── routes
│   │   └── bannerRoutes.js # API routes for banner CRUD operations
│   ├── server.js          # Express server setup
│   └── .env               # Environment variables (ignored by git)
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── Banner.js  # Banner component
│   │   │   └── Dashboard.js # Dashboard component
│   │   ├── pages
│   │   │   └── HomePage.js # Main page
│   │   ├── App.js         # Main App component
│   │   └── index.js       # Entry point
│   └── tailwind.config.js # Tailwind CSS configuration
└── .gitignore             # Ignored files and directories
```

## .gitignore

```plaintext
# Ignore environment variables
.env

# Ignore node_modules directory
node_modules/

# Other common ignores
.DS_Store
```

## Usage

1. **Internal Dashboard**: Access the dashboard on the main page to control the banner's visibility, description, timer, and link.

2. **Frontend Countdown Timer**: Once the timer is set, a reverse countdown will be displayed on the banner until it expires.

## License

This project is licensed under the MIT License.

---

Feel free to adjust any of the instructions or content to match your specific project details.
# First Backend Project 🚀

My first backend project built with Node.js, Express.js, MongoDB, Arcjet, Upstash, and Nodemailer to practice API development, database integration, security, and backend architecture.

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Arcjet
- Upstash
- Nodemailer

## Features

- REST API endpoints
- MongoDB database integration
- Security and request protection using Arcjet
- Email functionality with Nodemailer
- Upstash integration for caching/data handling
- Organized backend folder structure
- Environment variable support

## Repository

:contentReference[oaicite:0]{index=0}

## Project Structure

```bash
project/
│
├── config/         # Configuration files
├── controllers/    # Request handlers
├── database/       # Database connection
├── middlewares/    # Custom middleware
├── models/         # Database models
├── routes/         # API routes
├── utils/          # Helper functions
├── public/         # Static files
├── app.js          # Main application entry
└── package.json
```

## Installation

Clone the repository:

```bash
git clone https://github.com/skmoniri/backend-practice-expressjs.git
```

Move into the project directory:

```bash
cd backend-practice-expressjs
```

Install dependencies:

```bash
npm install
```

Create a `.env` file and add your environment variables:

```env
PORT=
MONGODB_URI=
ARCJET_KEY=
UPSTASH_URL=
UPSTASH_TOKEN=
EMAIL_USER=
EMAIL_PASS=
```

Start development server:

```bash
npm run dev
```

Start production server:

```bash
npm start
```

## Learning Goals

This project was created to practice:

- Building backend APIs
- Working with databases
- Using middleware
- Implementing security
- Sending emails
- Writing cleaner backend architecture

## Author

Made by Kami

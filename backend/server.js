// Import express server library.
const express = require('express')
// Import colors package.
const colors = require('colors')
// Import dotenv. For environment variables.
const dotenv = require('dotenv').config()
// Import middleware errorhandler.
const {errorHandler} = require('./middleware/errorMiddleware')
// Import connectDB.
const connectDB = require('./config/db')
// Assign port
const port = process.env.PORT || 8000

// Connect to db.
connectDB()

// Create express instance.
const app = express()

/* Middleware exceutes during request/ response cycle.*/
// Middleware. Working with request body data
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Middleware.          
app.use('/api/goals', require('./routes/goalRoutes'))

// Middleware. errorHandler.
app.use(errorHandler)

// Listen for requests.
app.listen(port, () => console.log(`Server started on port ${port}`))
// Import library
const express = require('express')
const dotenv = require('dotenv').config()
// Import middleware errorhandler.
const {errorHandler} = require('./middleware/errorMiddleware')
// Assign port
const port = process.env.PORT || 8000
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
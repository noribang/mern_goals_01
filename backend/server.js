// Import library
const express = require('express')
const dotenv = require('dotenv').config()
// Assign port
const port = process.env.PORT || 8000
// Create express instance.
const app = express()

// Middleware.          
app.use('/api/goals', require('./routes/goalRoutes'))


// Listen for requests.
app.listen(port, () => console.log(`Server started on port ${port}`))
const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 8000
// Create express instance.
const app = express()

/**CRUD**/
/*READ*/
app.get('/api/goals', (req, res) => {
    // res.send('Get goals...')
    res.json({message: 'Get goals...'})
})


// Listen for requests.
app.listen(port, () => console.log(`Server started on port ${port}`))
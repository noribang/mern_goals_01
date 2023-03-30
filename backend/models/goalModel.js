// Import mongoose.
const mongoose = require('mongoose')
// db schema.
const goalSchema = mongoose.Schema(
    {
        text: {
            type: String,
            required: [true, 'Please add a text value.']
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Goal', goalSchema)
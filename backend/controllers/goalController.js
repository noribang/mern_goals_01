// Import async-handler
const asyncHandler = require('express-async-handler')
// Import models.
const Goal = require('../models/goalModel')

// GET
// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
    // goalModel
    const goals = await Goal.find()

    /* Resond with goals from model. */
    // res.status(200).json({ message: 'Get goals...aaaa' })
    res.status(200).json(goals)
})

// POST
// @desc    Set goal
// @route   POST /api/goals
// @access  Private
const setGoal = asyncHandler( async (req, res) => {
    // console.log(req.body.text)

    // Error handling
    // If request body text does not exist
    // throw an error.
    if (!req.body.text) {
        // res.status(400).json({ message: "Please add text field." })
        res.status(400)
        throw new Error("Please add text field")    
    }
    // Response from model.
    const goal = await Goal.create({
        text: req.body.text,
    })
    // Response from model.
    // res.status(200).json({message: 'Set goal...xxxxxxxx'})
    res.status(200).json(goal)
})

// @desc    Update goal
// @route   UPDATE /api/goals/:id
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
    // Response from model.
    const goal = await Goal.findById(req.params.id)

    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    // Response from model.
    // res.status(200).json({message: `Update goal ${req.params.id}`})
    res.status(200).json(updatedGoal)
})

// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
    // Response from model.
    const goal = await Goal.findById(req.params.id)

    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    // await goal.remove()
    await Goal.findByIdAndRemove(req.params.id)

    // Response from model.
    // res.status(200).json({message: `Delete goal ${req.params.id}`})
    res.status(200).json({id: req.params.id})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}
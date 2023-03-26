const express = require('express')
const router = express.Router()
// Import controllers.
const {getGoals, 
       setGoal, 
       updateGoal, 
       deleteGoal} = require('../controllers/goalController')

/**CRUD**/
/*READ*/
// router.get('/', (req, res) => {
//     // res.send('Get goals...')
//     res.status(200).json({message: 'Get goalsxxx'})
// })
router.get('/', getGoals)

/*CREATE*/
router.post('/', (req, res) => {
    // res.send('Get goals...')
    res.status(200).json({message: 'Set goals...'})
})
/*UPDATE*/
router.put('/:id', (req, res) => {
    // res.send('Get goals...')
    res.status(200).json({message: `Update goal ${req.params.id}`})
})
/*DESTROY*/
router.delete('/:id', (req, res) => {
    // res.send('Get goals...')
    res.status(200).json({message: `Delete goal ${req.params.id}`})
})

module.exports = router

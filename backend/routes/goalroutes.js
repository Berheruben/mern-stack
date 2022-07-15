const express = require('express')
const router = express.Router()
const {getgoals,setgoal,updategoals,deletegoals} = require('../controllers/goalcontrollers')

router.route('/').get(getgoals).post(setgoal)
router.route('/:id').put(updategoals).delete(deletegoals)
module.exports = router
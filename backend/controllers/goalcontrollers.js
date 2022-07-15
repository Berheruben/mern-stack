const asynchandler = require('express-async-handler')

const goal = require('../model/model')



//@desc get goals
// @route GET /api/goals
//@access private
const getgoals = asynchandler(async(req,res)=>{
    const goals = await goal.find()
    res.status(200).json(goals)
})

//@desc set goals
// @route POST /api/goals
//@access private
const setgoal = asynchandler(async(req,res)=>{
    if(!req.body.text){
     res.status(400)
     throw new Error('please add a text field')
    }

    const goals = goal.create({
        text: req.body.text
    }) 
    res.status(200).json(goals)
})

//@desc update goals
// @route PUT /api/goals/:id
//@access private
const updategoals = asynchandler(async(req,res)=>{
    const goals = await goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('goal not found');
    }
    const updatedgoal = await goal.findByIdAndUpdate(req.params.id,req.body, {new: true,})
    //res.status(200).json({message: `update goals ${req.params.id}`})
    res.status(200).json(updatedgoal)
})

//@desc delete goals
// @route delete /api/goals
//@access private
const deletegoals = asynchandler(async(req,res)=>{
    res.status(200).json({message: `update goals ${req.params.id}`})
})


module.exports = {
    getgoals,
    setgoal,
    updategoals,
    deletegoals
}
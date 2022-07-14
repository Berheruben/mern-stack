const asynchandler = require('express-async-handler')
//@desc get goals
// @route GET /api/goals
//@access private
const getgoals = (req,res)=>{
    res.status(200).json({message: `Get goals`})
}

//@desc set goals
// @route POST /api/goals
//@access private
const setgoal = asynchandler(async(req,res)=>{
    if(!req.body.text){
     res.status(400)
     throw new Error('please add a text field')
    }
    res.status(200).json({message: 'set goal'})
})

//@desc update goals
// @route PUT /api/goals/:id
//@access private
const updategoals = asynchandler(async(req,res)=>{
    res.status(200).json({message: `update goals ${req.params.id}`})
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
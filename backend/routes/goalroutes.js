const express = require('express')
const router = express.Router()
const {getgoals,setgoal,updategoals,deletegoals} = require('../controllers/goalcontrollers')
/*
router.get('/',(req,res)=>{
    res.status(200).json({message: 'ciaoone'})
})
*/

/*
router.post('/',(req,res)=>{
    res.status(200).json({message: 'set goal'})
})
 
router.put('/:id',(req,res)=>{
    res.status(200).json({message: `update goals ${req.params.id}`})
})
 
router.delete('/:id',(req,res)=>{
    res.status(200).json({message: `update goals ${req.params.id}`})
})
 */
/*
router.get('/',getgoals)
router.post('/',setgoal)
router.put('/:id',updategoals)
router.delete('/:id',deletegoals) 
*/
router.route('/').get(getgoals).post(setgoal)
router.route('/:id').put(updategoals).delete(deletegoals)
module.exports = router
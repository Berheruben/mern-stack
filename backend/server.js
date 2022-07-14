const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const {errorhandler} = require('./middleware/errormiddleware')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./routes/goalroutes'))
    
app.use(errorhandler)
 

app.listen(port, () => console.log( `server started on port ${port} `))
const express = require('express')
const { dirname } = require('path')

const app = express()

app.use(express.json())

app.use(express.static(`${__dirname}/public`))

app.listen(4000, ()=>{
    console.log('app in up on port 4000');
})

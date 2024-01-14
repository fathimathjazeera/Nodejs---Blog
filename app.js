require('dotenv').config()

const express = require('express')
const expressLayout = require('express-ejs-layouts')


const app=express()
const PORT= 7000 || process.env.PORT


//Templating Engine
app.use(expressLayout)
app.set('app.setlayout','./layouts/main')
app.set('view engine','ejs')


app.use('/',require('./server/routes/main'))

app.listen(PORT,()=>{
    console.log(`App listening on port ${PORT}`)
})
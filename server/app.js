const dotenv=require('dotenv')

const express = require('express');

const { default: mongoose } = require('mongoose');

const app =express();
dotenv.config({path:'./config.env'})

const DB= process.env.DATABASE
const PORT = process.env.PORT
app.use(express.json())
require('./db/conn')
app.use(require('./router/auth'))

const middleware =(req,res,next)=>{
    console.log("hello i am middleware")
    next();
}
app.get('/',(req,res)=>{
    res.send("Hello ashim world")
})

app.get('/about',middleware,(req,res)=>{
    res.send("Hello about ashim world")
})

app.get('/contact',(req,res)=>{
    res.cookie("ashi","ashim")
    res.send("Hello contact ashim world")
})

app.get('/signin',(req,res)=>{
    res.send("Hello signin")
})

app.get('/signup',(req,res)=>{
    res.send("Hello signup")
})

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
})


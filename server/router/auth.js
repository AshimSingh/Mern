const express =require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require("../db/conn")
const User =require('../model/userSchema')

router.get('/',(req,res)=>{
    res.send("This is home from router")
})
router.post('/api/register',async(req,res)=>{
    const {name,email,phone,work,password,cpass}=req.body
    console.log(name,email,phone,work,password,cpass)
    if(!name || !email || !phone || !work || !password || !cpass)
    {
        return res.status(422).json({error:"fill properly"})
    }
    else if (password != cpass){
        return res.status(422).json({error:"Password didnt match"})
    }
    else{

        try{
            const userExists = await User.findOne({email:email})
            if(userExists){
                return res.status(422).json({error:"Email already exists"})
            }
            else{
                const user =new User({name,email,phone,work,password,cpass})
                const userReg = await user.save()
                if(userReg){
                    return res.status(500).json({message:"User register sucessfully"})
                }
            }
           }catch(error){
            console.log(error)
           }

    }

    // promises
    // User.findOne({email:email})
    // .then((userExists)=>{
    //     if(userExists){
    //         return res.status(422).json({error:"Email already exists"})
    //     }
    //     const user = new User({name,email,phone,work,password,cpass})
    //     user.save().then(()=>{
    //         return res.status(201).json({message:"User register sucessfully"})
    //     }).catch((err)=>{
    //         res.status(500).json({message:"User register failed"})
    //     })
    // }).catch((err)=>{console.log(err)})

   


})

router.post('/signin',async (req,res)=>{
    try{
    const {email,password}=req.body
    
    if( !email  || !password )
    {
        return res.status(422).json({error:"Fill properly"})
    }

    
        const userExists = await User.findOne({email:email})
        if(userExists){
            const ismatch = await bcrypt.compare(password,userExists.password)
           

            if(!ismatch)
            {
                return res.status(500).json({message:"Invalid credentials"})
            }
            else{
                 const token =await userExists.generateAuthToken()
                 res.cookie("jwtoken",token,{
                    expires:new Date(Date.now() + 2589200000),
                    httpOnly:true
                 })
                return res.status(500).json({message:"logged in successfully"})
            }
        }
        else{
            return res.status(422).json({error:"Inva credential"})
        }

    }catch(err){
        return res.status(422).json({err})
    }


})

module.exports = router
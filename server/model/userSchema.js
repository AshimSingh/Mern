const mongoose =require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userSchema = new mongoose.Schema(
    {
        name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    work:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpass:{
        type:String,
        required:true
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]

    }
)

userSchema.pre('save',async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,12)
        this.cpass = await bcrypt.hash(this.cpass,12)
    }
    next()

})

//Generating token
userSchema.methods.generateAuthToken = async function(){
    try{
        const token = jwt.sign({_id: this._id},process.env.SECRET_KEY)
        this.tokens =this.tokens.concat({token:token})
        console.log(token)
        await this.save()
        return token
    }catch(error){
        console.log(error)
    }
}



const User = mongoose.model('USER',userSchema)

module.exports = User
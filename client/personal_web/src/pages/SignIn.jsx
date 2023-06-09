import React from 'react'
import './Register.css'
const SignIn = () => {
  return (
    <div className=' h-screen flex justify-center items-center bg-gray-200'>
       <div className='bg-white md:w-[70%] w-[90%] flex justify-center items-center shadow-md rounded-md min-h-[50%]'>
        <form className='flex flex-col md:w-[40%] w-full m-5 '>
          <h3 className='font-bold text-2xl p-2 '>LogIn In</h3>
          
          
         
          <input type='text' name='email' className=' border-b-[3px]  border-grey-400 p-2 my-3 fonz' placeholder=" &#xf0e0; Email"></input>


         

          <input type='password' name='password' className=' border-b-[3px]  border-grey-400 p-2 my-3 fonz' placeholder=" &#xf0e0; Password"></input>

          
  
          <button className='bg-blue-300  p-3 font-semibold text-white'>Register</button>
        </form>
        <img src='https://cdn.dribbble.com/users/4781516/screenshots/10796279/media/04eb24250e23400dc0162080a231b70c.gif' className='w-[40%] h-[60%] md:flex hidden'></img>
       </div>
    </div>
  )
}

export default SignIn

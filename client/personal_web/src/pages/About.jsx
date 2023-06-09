import React from 'react'
import { useState } from 'react'
const About = () => {
  
  const links=[
    {
      lin:"About",
      content:"<AboutContent/>"
    },
    {
      lin:"Timeline",
      content:"<AboutContent/>"
    }
  ]
  const [link,setLink]=useState('About')
  const changelink=(link)=>{
    setLink(link)
  }
  return (
    <div className='navmargin'>
       <div className='h-full flex justify-center items-center '>
        <div className='about grid md:grid-cols-3 grid-cols-1 md:w-[80%] w-[90%] min-h-[50%] shadow-md rounded-lg p-5'>
          <div className='col-1 flex items-center flex-col justify-center'>
           {/* <div className='bg-green-400 md:w-[80%] w-[95%]'> */}
           <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" className='w-[60%]'></img>
            <div  className=' w-[60%] mt-3'>
              <h1 className='text-gray-400 text-2xl'>Youtuber</h1>
              <h1 className='text-gray-400 text-2xl'>Youtuber</h1>
              <h1 className='text-gray-400 text-2xl'>Youtuber</h1>
              <h1 className='text-gray-400 text-2xl'>Youtuber</h1>
              <h1 className='text-gray-400 text-2xl'>Youtuber</h1>
              <h1 className='text-gray-400 text-2xl'>Youtuber</h1>
            </div>
           </div>
          {/* </div> */}
          <div className='col-span-2  p-3'>
            <div className='flex justify-between'>
            <div>
            <h1 className='text-gray-400 text-3xl'>Ashim Thapa</h1>
            <h1 className='text-blue-400 text-xl'>Web developer</h1>
            <h1 className='text-gray-400 text-xl mt-2'>Ratings: 5/10</h1>
            </div>
            <div><button className='bg-blue-400 p-2 text-white'>Edit info</button></div>
            </div>
          
            <div className='mt-3'>
              <div className='flex'>
                {
                  links.map((m)=>{
                      return(
                        <h1 className={`text-xl mr-2 cursor-pointer   p-2 ${link==m.lin?'border-b-[3px] text-blue-400  border-blue-400':'text-gray-400'}`} onClick={()=>changelink(m.lin)}>{m.lin}</h1>
                      )
                  })
                }
                {/* <h1 className={`text-gray-400 text-xl mr-2 cursor-pointer   p-2 ${link=="About"?'border-b-[3px]  border-grey-400':''}`} onClick={()=>changelink("About")}>About</h1>
                <h1 className={`text-blue-400 text-xl mr-2 cursor-pointer p-2 ${link=="Timeline"?'border-b-[3px]  border-grey-400':''}` } onClick={()=>changelink("Timeline")}>Timeline</h1> */}
              </div>

              <div className=' md:w-[85%] mt-3'>
                {link=="About"?<Aboutcontent/>:""}
                {link=="Timeline"?<Timeline/>:""}    
                    
                  
              </div>
            </div>
          </div>
        </div>
       </div>
    </div>
  )
}

export default About
const Timeline=()=>{
  return(
    <div>hello ashim</div>
  )
}
const Aboutcontent= ()=>{
  return(
    <div>
    <div className='grid grid-cols-3 mt-2'>
  <h1 className='text-gray-700 font-semibold   col-span-2'>User Id</h1>
  <h1 className='text-blue-400  '>123456789</h1>

</div>
<div className='grid grid-cols-3 mt-2'>
  <h1 className='text-gray-700 font-semibold   col-span-2'>Ashim Thapa</h1>
  <h1 className='text-blue-400  '>Web developer</h1>
</div>

<div className='grid grid-cols-3 mt-2'>
  <h1 className='text-gray-700 font-semibold   col-span-2'>Ashim Thapa</h1>
  <h1 className='text-blue-400  '>Web developer</h1>
</div>

<div className='grid grid-cols-3 mt-2'>
  <h1 className='text-gray-700 font-semibold   col-span-2'>Ashim Thapa</h1>
  <h1 className='text-blue-400  '>Web developer</h1>
</div>
</div>
  )
}
import React, { useState } from 'react'


const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up')

  

  return (
    <form onSubmit={(event)=>{event.preventDefault()}}  className=' flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className=' inline-flex items-center gap-2 mb-2 mt-10'>
        <p className=' prata-regular text-3xl'>{currentState }</p>
        <hr className=' border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      { currentState === 'Sign Up' ? <input type="text"  className=' w-full px-3 py-2 border border-gray-800 ' placeholder='Name' required /> : '' }
      <input type="email"  className=' w-full px-3 py-2 border border-gray-800 ' placeholder='Email' required />
      <input type="password"  className=' w-full px-3 py-2 border border-gray-800 ' placeholder='Password' required />

      <div className=' w-full flex justify-between text-sm mt-[-8px]' >
        <p className=' cursor-pointer'>Forgot your password?</p>
        {
          currentState === 'Sign Up' ? 
          <p className=' cursor-pointer' onClick={()=>setCurrentState(' Log In')}>Already a user? Log In</p> : 
          <p className=' cursor-pointer' onClick={()=>setCurrentState('Sign Up')}>Create acount</p>
        }
      </div>

      <button className=' bg-black text-white font-light px-8 py-2 mt-4' >{currentState === ' Log In' ? 'Sign In' : ' Sign Up'}</button>



    </form>
  )
}

export default Login
import React, { useState } from 'react'
import { NetflixBgLogo, Netflixlogo } from '../Utils/utils'
import Header from './Header'

const Login = () => {
  const [isSignIn,SetisSignin]=useState(true);

const togglesignInFrom=()=>{
   SetisSignin(!isSignIn);
}

  return (
    <div>
    <Header/>
      <div className='absolute'><img src={NetflixBgLogo} alt="bg-logo" /></div>

      <form className='absolute text-white bg-black p-12 w-3/12 my-36 mx-auto left-0 right-0 opacity-90'>
      <h1 className='font-bold text-3xl my-4'>{isSignIn? 'Sign In':'Sign Up'}</h1>
     {
      !isSignIn &&
      ( < input type="text" placeholder='Full Name' className='p-2 my-2 bg-gray-900 w-full rounded-sm'/>)
     }

        <input type="text" placeholder='Email Address' className='p-2 my-2 bg-gray-900 w-full rounded-sm'/>
        <input type="password" placeholder='Password'  className='p-2 my-2 bg-gray-900 w-full rounded-sm'/>
        <button className='p-4 my-6 bg-red-700 w-full rounded-sm'>{isSignIn? 'Sign In':'Sign Up'}</button>

        <p className='my-4'>{isSignIn? 'New to Netflix?':'Already Registered?'}<span className='cursor-pointer hover:text-blue-400 ' onClick={togglesignInFrom}>{isSignIn? 'Sign Up':'Sign in'}.</span></p>
      </form>
    </div>
  )
}

export default Login

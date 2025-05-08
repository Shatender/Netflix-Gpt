import React from 'react'
import { Netflixlogo } from '../Utils/utils'

const Header = () => {
  return (
  
  <div className='absolute z-10'>
    <img src= {Netflixlogo} alt="logo"  className='w-44 bg-gradient-to-t  from to-black py-2  '/>
  </div>
   
  )
}
 
export default Header

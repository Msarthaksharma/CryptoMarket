import React from 'react'
import { FaCoins } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <Link to='/'>
    <div className='w-full h-[90px] font-bold bg-[--primary-color]'>
        <div className='max-w-[1260px] flex justify-center items-center '>
            <FaCoins size={25} className='text-cyan-500'/>
            <h1 className='text-4xl'>Coin <span className='text-cyan-500'>Search</span></h1>
        </div>
    </div>
   </Link>
  )
}

export default Navbar
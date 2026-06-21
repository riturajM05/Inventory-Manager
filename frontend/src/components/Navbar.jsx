import React from 'react'
import { NavLink,Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-around bg-[#355872] py-5 text-lg text-[#F7F8F0]'>
        <div className='flex items-center gap-2'>
            <Link to='/'><img className='w-7 h-7' src="../assets/inventory.png" alt="" /></Link>
            <Link to='/'><p>INVENTORY</p></Link>
        </div>
        <div className='flex justify-around w-[30%]'>
            <NavLink to='/'><p>PRODUCTS</p></NavLink>
            <NavLink to='/create'><p>ADD PRODUCT</p></NavLink>
        </div>
    </div>
  )
}

export default Navbar

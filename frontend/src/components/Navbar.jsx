import React, { useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../../assets/inventory.png'
import { authContext } from '../context/AuthContext'

const Navbar = () => {
  const { token, logout } = useContext(authContext)
  return (
    <div className='flex items-center justify-around bg-[#355872] py-5 text-lg text-[#F7F8F0]'>
      <div className='flex items-center gap-2'>
        <Link to='/'><img className='w-7 h-7' src={logo} alt="" /></Link>
        <Link to='/'><p>INVENTORY</p></Link>
      </div>
      <div className='flex justify-around w-[30%]'>
        <NavLink to='/'><p>Products</p></NavLink>
        <NavLink to='/create'><p>Add Product</p></NavLink>
        {token ? (<p onClick={logout}>Sign Out</p>) : (
          <NavLink to='/login'><p>Login/Register</p></NavLink>
        )}
      </div>
    </div>
  )
}

export default Navbar

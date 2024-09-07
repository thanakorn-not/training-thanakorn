import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-blue-500 p-4 flex justify-between items-center'>
        <div className='flex items-center ml-10'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s" alt="" className="h-8 w-8 mr-2" />

            <span className='text-white text-lg'>NVC Training Center</span>
        </div>

        <ul className='flex space-x-4 mr-10'>
            <li><NavLink to ="/" className='text-white'>หน้าหลัก</NavLink></li>
            <li><NavLink to="/course" className='text-white'>หลักสูตรที่เปิดสอน</NavLink></li>
            <li><NavLink to="/contact" className='text-white'>ติดต่อ</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar
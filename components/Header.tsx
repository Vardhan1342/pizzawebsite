import React from 'react';
import Link from 'next/link'
import { IoMenuOutline } from 'react-icons/io5';


const Header = () => {
  return (
    <header className='flex items-center justify-between pt-4 sm:ml-5'>
          
          <nav className='hidden sm:flex justify-center items-center gap-6 text-gray-500 font-semibold text-sm' >
          <Link href="" className='text-4xl text-red-500 font-bold'>
            SV Pizza
          </Link>
          <Link href="">Home</Link>
          <Link href="">Menu</Link>
          <Link href="">About</Link>
          <Link href="">Contact</Link>
          </nav>
          <nav className='flex justify-center items-center gap-4'>
          <Link href="" className='btn'>
            Login
          </Link>
          <Link href="/register" className='btn'>
            Register
          </Link>
          </nav>
          <nav>
            <div className='sm:hidden text-red-500 rounded-full  cursor-pointer hover:scale-105 transition-all'>
              <IoMenuOutline size="35" />
            </div>
          </nav>
      </header>
  );
}

export default Header;

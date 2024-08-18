'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const pathname=usePathname();
  return (
    <div className='flex justify-around bg-orange-500 text-white h-[50px] items-center'>
      <Link className={pathname==='/'?'text-gray-500':''} href='/'>Home</Link>
      <Link className={pathname==='/about'?'text-gray-500':''} href='/about'>About</Link>
      <Link  className={pathname==='/contact'?'text-gray-500':''} href={'/contact'}>Contact</Link>
      <Link  className={pathname==='/login'?'text-gray-500':''} href={'/login'}>Login</Link>
    </div>
  )
}

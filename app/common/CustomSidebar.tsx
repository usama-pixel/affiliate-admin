'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type Props = {};

const CustomSidebar = (props: Props) => {
  const pathname = usePathname()
  return (
    <div className="bg-[#2C3E50] px-3 h-[100vh]">
      <nav>
        <h1 className='text-xl text-white w-fit mx-auto mb-3'>Affiliate CMS</h1>
        <ul className='flex flex-col gap-2'>
          <Link href="/dashboard" className={`${pathname === '/dashboard' ? 'bg-[#3498DB]' : 'bg-[#34495E' } text-white rounded-lg w-[90%] py-2 px-4 hover:bg-[#3498DB] hover:cursor-pointer`}>
            Dashboard
          </Link>
          <Link href="/posts" className={`${pathname === '/posts' ? 'bg-[#3498DB]' : 'bg-[#34495E' } text-white rounded-lg w-[90%] py-2 px-4 hover:bg-[#3498DB] hover:cursor-pointer`}>
            Posts
          </Link>
          <Link href="/categories" className={`${pathname === '/categories' ? 'bg-[#3498DB]' : 'bg-[#34495E' } text-white rounded-lg w-[90%] py-2 px-4 hover:bg-[#3498DB] hover:cursor-pointer`}>
            Categories
          </Link>
          <Link href="/featured" className={`${pathname === '/featured' ? 'bg-[#3498DB]' : 'bg-[#34495E' } text-white rounded-lg w-[90%] py-2 px-4 hover:bg-[#3498DB] hover:cursor-pointer`}>
            Featured
          </Link>
          <Link href="/settings" className={`${pathname === '/settings' ? 'bg-[#3498DB]' : 'bg-[#34495E' } text-white rounded-lg w-[90%] py-2 px-4 hover:bg-[#3498DB] hover:cursor-pointer`}>
            Settings
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default CustomSidebar;
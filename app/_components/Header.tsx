import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import CustomBtn from './CustomBtn';

const Header = () => {
const menuOptions = [
  { name: 'Home', link: '/' },
   { name: 'Pricing', link: '/pricing' }, 
   { name: 'Contact', link: '/contact' }];



  return (
    <div className='flex items-center justify-between h-16 px-10 py-2 position-fixed w-full'>
        {/* logo */}
        <div className='flex items-center text-blue-200 gap-1.5'>
        <Image src="/logo.svg" alt="Novamint Logo" width={50} height={50} />
        <h2 className='font-bold '>Novamint</h2>
        </div>
        {/* menu options */}

        <div className='flex '>
          {menuOptions.map((menu,index) => (
            <Button key={index} variant='ghost' className='cursor-pointer text-blue-200 hover:text-black mx-2'>
              {menu.name}
            </Button>
          ))}
           
        </div >

        {/* get started button */}

        <div className='flex '> 
          <CustomBtn><span></span></CustomBtn>       
     
          </div>

    </div>
  )
}

export default Header;
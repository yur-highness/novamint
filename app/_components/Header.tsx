import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import CustomBtn from './CustomBtn';
import {  SignInButton,  SignedOut, SignedIn,UserButton, } from '@clerk/nextjs';

const Header = () => {
const menuOptions = [
  { name: 'Home', link: '/' },
   { name: 'Pricing', link: '/pricing' }, 
   { name: 'Contact', link: '/contact' }];



  return (
    <div className='flex items-center justify-between h-16 px-10 mt-2 position-fixed w-full'>
        {/* logo */}
        <div className='flex items-center text-blue-200 gap-1.5'>
        <Image src="/logo.svg" alt="Novamint Logo" width={50} height={50} />
        <h2 className='font-bold '>Novamint</h2>
        </div>
        {/* menu options */}

        <div className='flex '>
          {menuOptions.map((menu,index) => (
            <Button key={index} variant='ghost' className='cursor-pointer text-blue-200 hover:text-black mx-2'>
              <Link href={menu.link}>{menu.name}</Link>
            </Button>
          ))}
           
        </div >

        {/* get started button */}

        <div className='flex gap-4 items-center justify-center cursor-pointer '> 
          <SignInButton mode="modal" forceRedirectUrl={'/workspace'}>
                <CustomBtn><span></span></CustomBtn> 
          </SignInButton>
          <div className=' text-center py-1  text-black'>
         
               <SignedOut>
            <SignInButton>
              <Button variant="outline" className='cursor-pointer hover:bg-transparent hover:text-amber-50'>Sign In</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                  userButtonPopoverCard: "shadow-xl",
                  userPreviewMainIdentifier: "font-semibold",
                },
              }}
              afterSignOutUrl="/"
            />
          </SignedIn>
             </div>
         
         
          </div>

    </div>
  )
}

export default Header;
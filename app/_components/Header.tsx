import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button';
import Link from 'next/link';

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

        <div className='flex ml-24'>
          {menuOptions.map((menu,index) => (
            <Button key={index} variant='ghost' className='cursor-pointer text-blue-200 hover:text-black mx-2 '>
              <Link href={menu.link}>{menu.name}</Link>
            </Button>
          ))}
           
        </div >

        {/* get started button */}

        <div className='flex gap-4 items-center justify-center cursor-pointer '> 
          <SignInButton mode="modal" forceRedirectUrl={'/workspace'}>
          <Link href="/workspace">
  <button className="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-slate-900 to-slate-70 text-white shadow hover:bg-black/90 h-9 px-4 py-4 max-w-42 whitespace-pre md:flex group relative justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2 mr-6">
  <span
    className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"
  ></span>
  <div className="flex items-center">
  
    <span className="ml-1 text-white text-xs">Get Started</span>
  
  </div>

</button>
          </Link>
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
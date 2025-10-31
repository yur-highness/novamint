"use client"

import React from 'react'
import { Textarea } from '@/components/ui/textarea';
import { Brush, ImagePlus, ShoppingCart, ClipboardList, Users, ChartBar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SignInButton } from '@clerk/nextjs';

import { useState } from 'react';


const Workspace = () => {
    const[userInput, setUserInput] = useState<string>();
      const suggestions = [
      {    label: "E-Commerce Platform",
          prompt: "Create a platform for buying and selling products online.",
          icon: ShoppingCart
      }, 
       {    label: "Project Management Tool",
            prompt: "Develop a tool to help teams manage projects and tasks.",
            icon: ClipboardList
      }, 
       {    label: "Social Media App",
          prompt: "Build an app for connecting with friends and sharing content.",
          icon: Users
      },
         {    label: "Dashboard Analytics",
          prompt: "Design a dashboard for visualizing key performance metrics.",
          icon: ChartBar
      }
      ];
  return (
    <div>
      <div className='flex flex-col gap-6 items-center justify-center m-auto w-full h-[80vh]'>
  <h2 className='text-center z-50 text-5xl text-white font-bold py-3.5'>Mint</h2>

  
  <div className='w-7xl p-5 border rounded-2xl bg-gradient-to-r from-slate-900 to-slate-700'>
   <Textarea
  value={userInput}
  onChange={(e) => setUserInput(e.target.value)}
  className='w-full h-42 text-white py-3.5 mt-4 border-none outline-none resize-none 
             bg-gradient-to-r from-slate-900 to-slate-700
             focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0'
  placeholder='Describe your idea...'
/>

    <div className='mt-1 py-2 flex justify-between items-center'>
      <Button variant='ghost'><ImagePlus /></Button>
      <SignInButton mode="modal" forceRedirectUrl={'/workspace'}>
      <Button variant='ghost' disabled={!userInput}><Brush /></Button>
      </SignInButton>
      </div>
  </div>
  <div className='flex mt-4'>
    {suggestions.map((suggestion) => (
      <Button key={suggestion.label} variant='outline' className='m-2 text-black cursor-pointer hover:bg-transparent hover:text-white'
      onClick={()=> setUserInput(suggestion.prompt)}> 
      
        <suggestion.icon className='mr-2' />
        {suggestion.label}
      </Button>
    ))}
  </div>
  </div>
    </div>
  )
}

export default Workspace
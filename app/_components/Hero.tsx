'use client'

import React, { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { ArrowUp, ImagePlus, ShoppingCart, ClipboardList, Users, ChartBar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {

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
  const[userInput, setUserInput] = useState<string>();



  return (
    <div className='flex flex-col items-center justify-center m-auto w-full h-[80vh]'>
  <h2 className='text-center z-50 text-5xl text-white font-bold py-3.5'>Start your Next SAAS Product</h2>
  <p className='text-center z-50 text-lg text-white py-3.5'>Generate.Design.Deploy</p>
  
  <div className='w-7xl p-5 border rounded-2xl'>
    <Textarea 
    value={userInput}
    onChange={(e) => setUserInput(e.target.value)}
    className='w-full h-42 text-white py-3.5 mt-4 border-none resize-none focus:outline-none focus:ring-0' placeholder='Describe your idea...'></Textarea>
    <div className='mt-1 py-2 flex justify-between items-center'>
      <Button variant='ghost'><ImagePlus /></Button>
      <Button variant='ghost'><ArrowUp /></Button>
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
  )
}

export default Hero;
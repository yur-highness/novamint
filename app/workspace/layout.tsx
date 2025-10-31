import React from 'react'
import { AppSidebar } from "./_components/AppSideBar";
import { SidebarProvider,SidebarTrigger } from '@/components/ui/sidebar';
import AppHeader from './_components/AppHeader';

export default function Workspacelayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

  <SidebarProvider>
      <AppSidebar />
      <div className='w-full bg-zinc-950 min-h-screen text-white'>
        <AppHeader />
       
        {children}
      </div>
    </SidebarProvider>
  );
}
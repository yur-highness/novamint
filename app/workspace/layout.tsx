import React from 'react'
import Header from '../_components/Header'
import Footer from '../_components/Footer'

export default function Workspacelayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

   <>
   <div className="min-h-screen overflow-hidden  bg-zinc-950 text-gray-100">
    


    <main>{children}</main>

    </div>
   </>
  );
}
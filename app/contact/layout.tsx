import React from 'react'
import Header from '../_components/Header'
import Footer from '../_components/Footer'

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

   <>
   <div className="min-h-screen overflow-hidden  bg-zinc-950 text-gray-100">
    

   <Header />
    <main>{children}</main>
    <Footer />
    </div>
   </>
  );
}

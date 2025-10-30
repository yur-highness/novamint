import React from 'react'

const Footer = () => {
  return (
    <div className='text-shadow-indigo-400 flex items-center justify-center py-3 w-full'>
        <div className="min-h-[70vh] flex flex-col md:flex-row items-center justify-between bg-transparent text-white px-8 md:px-24 py-20">
      {/* Left Section */}
      <div className="max-w-lg space-y-6">
        <h1 className="text-5xl font-light leading-tight">
          NovaMint helps you to build your product fast.
        </h1>
        <button className="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-slate-900 to-slate-70 text-white shadow hover:bg-black/90 h-9 px-4 py-6 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2">
  <span
    className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"
  ></span>
  <div className="flex items-center">
    
    <span className="ml-1 text-white text-xs">Start 3 Days Free Try</span>
  </div>

</button>
      </div>

      {/* Right Section */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-700 rounded-xl p-10 mt-12 md:mt-0 md:ml-16 w-full max-w-2xl">
        <div className="grid grid-cols-3 gap-8 mb-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-gray-300">Platform</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#">About</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing & Plans</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-gray-300">Resources</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#">Account</a></li>
              <li><a href="#">Tools</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-gray-300">Legals</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#">Guides</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Licensing</a></li>
            </ul>
          </div>
        </div>
      &copy;TechWizard@2025. All rights reserved.
        <hr className="border-gray-700 mb-6" />

        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-400">Follow us on:</p>
          <div className="flex space-x-4 text-gray-400">
           
<div className="group relative">
  
 </div>{/*
            <a href="#"><FaFacebookF className="hover:text-white" /></a>
            <a href="#"><FaInstagram className="hover:text-white" /></a> */}
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Footer
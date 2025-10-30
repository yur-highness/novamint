import React from 'react'


const ProductValue = () => {
  return (
    <div>
        <section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen bg-black text-white px-6 md:px-20">
      {/* Left content */}
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Building digital <br /> products & brands.
        </h1>

        <p className="text-gray-600 text-lg mb-8">
          NovaMint focus on technology, innovation, and
          software build making easy.
        </p>

        <form className="flex items-center w-full max-w-md mb-4 gap-1">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 py-3 px-4 rounded-l-lg bg-[#1e293b00] border border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* <button
            type="submit"
            className="bg-blue-600/50 hover:bg-blue-700 text-white font-medium px-6 py-0 rounded-r-lg transition-all"
          >
            Try for free
          </button> */}

<button

  className="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-slate-900 to-slate-70 text-white shadow hover:bg-black/90 h-9 px- py-6 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2"
>
  <span
    className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"
  ></span>
  <div className="flex items-center">
    
    <span className="ml-1 text-white">Try For Free</span>
  </div>

</button>

 
        </form>

        <p className="text-sm text-gray-400">
          Instant signup. No credit card required.{" "}
        
          .
        </p>
      </div>

      {/* Right illustration */}
      <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
        <img
          src="https://img.pikbest.com/wp/202346/artificial-intelligence-robot-isolated-black-background-a-shiny-light-bulb-featured-on-3d-rendered-or-cyborg_9728412.jpg!bw700"
          alt="3D Illustration"
          className=" w-full h-[450px]"
        />
      </div>
    </section>
    
    </div>
  )
}

export default ProductValue
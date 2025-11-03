
import Link from 'next/link';

const Cta = () => {
  return (
    <>
    <div>
        <section className="bg-linear-to-r from-slate-900 to-slate-700 ">
    <div className="py-8 px-4 mx-auto w-full sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-white dark:text-white">Start your free trial today</h2>
            <p className="mb-6 font-light text-gray-400 dark:text-gray-400 md:text-lg">Try NovaMint Platform for 3 days. No credit card required.</p>
            <a href="#" className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Free trial for 3 days</a>
            <div className='flex items-center justify-center mt-4'>
  <button className="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-linear-to-r from-slate-900 to-slate-70 text-white shadow hover:bg-black/90 h-9 px-4 py-6 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2 cursor-pointer">
  <span
    className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"
  ></span>
  <div className="flex items-center">
    <Link href='/workspace'>
    <span className="ml-1 text-white text-xs">MINT</span>
    </Link>
  </div>

</button>
            </div>
 
        </div>
    </div>
</section>
        </div>
        </>
  )
}

export default Cta
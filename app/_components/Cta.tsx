import CustomBtn from './CustomBtn';

const Cta = () => {
  return (
    <>
    <div>
        <section className="bg-gradient-to-r from-slate-900 to-slate-700 ">
    <div className="py-8 px-4 mx-auto w-full sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-white dark:text-white">Start your free trial today</h2>
            <p className="mb-6 font-light text-gray-400 dark:text-gray-400 md:text-lg">Try NovaMint Platform for 3 days. No credit card required.</p>
            <a href="#" className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Free trial for 3 days</a>
            <div className='flex items-center justify-center mt-4'>
                  <CustomBtn><span></span></CustomBtn> 
            </div>
 
        </div>
    </div>
</section>
        </div>
        </>
  )
}

export default Cta
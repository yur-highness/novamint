import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return <>
   <div className='flex items-center justify-center h-screen bg-gradient-to-r from-slate-900 to-slate-700'>
    (  <SignIn />)
  </div>
</>
 
}
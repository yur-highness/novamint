import {SidebarTrigger } from '@/components/ui/sidebar';
import { UserButton } from '@clerk/nextjs';

const AppHeader = () => {
  return (
    <div className='p-4 flex items-center justify-between gap-4'>
       <SidebarTrigger />
       <UserButton />
    </div>
  )
}

export default AppHeader
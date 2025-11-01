import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const PlayGroundHeader = () => {
  return (
    <div className='w-full flex items-center justify-between px-4 py-2 text-white'>
       <Link href={'/'} >
        <Image src={"/logo.svg"} alt="Logo" width={32} height={32} />
        </Link>
        <h2 className="font-bold text-xl">Novamint Playground</h2>
        <Button className='cursor-pointer'>Save</Button>
    </div>
  )
}

export default PlayGroundHeader
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const PlayGroundHeader = () => {
  return (
    <div className='w-full flex items-center justify-start gap-10 px-4 py-4 text-white'>       <Link href={'/'} >
        <Image src={"/logo.svg"} alt="Logo" width={32} height={32} />
        </Link>
        <h2 className="font-bold text-xl">Novamint Playground</h2>
        <Link href={'/workspace'} >
        <Button className='cursor-pointer bg-neutral-50 text-black hover:bg-transparent hover:text-white hover:border-2'>Workspace</Button>
        </Link>
        <Button className='cursor-pointer bg-neutral-50 text-black hover:bg-transparent hover:text-white hover:border-2'>Save</Button>
    </div>
  )
}

export default PlayGroundHeader
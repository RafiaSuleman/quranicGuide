import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Navbar from './navbar'
import Mobilenav from './mobilenav'

const Header = () => {
  return (
    <header className="py-3 xl:py-3 text-white z-50">
    <div className=" container mx-auto flex justify-between items-center">
    <div className='flex justify-center items-center'>
    <Image src={'/logo2.png'} width={100} height={50} alt={'QuranicGuide'} />
      <Link href="/">
     
        <h1 className="lg:block hidden text-4xl font-semibold text-primary-foreground">
          Quranic Guide
        </h1>
      </Link>

    </div>

      <div className="hidden xl:flex gap-8 items-center ">
       <Navbar/>
      </div>
      <div className="xl:hidden"><Mobilenav/></div>
    </div>
  </header>
  )
}

export default Header

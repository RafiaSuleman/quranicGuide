'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import {CiMenuFries} from 'react-icons/ci'
import { link } from 'fs'

const Links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Videos",
      path: "/videos",
    },
    {
      name: "Courses",
      path: "/courses",
    },
    {
      name: "Pricing",
      path: "/pricing",
    },
    {
      name: "Contact",
      path: "/contactus",
    },
   
  ];

const Mobilenav = () => {
    const pathname = usePathname();
  return (
    <Sheet>
    <SheetTrigger className="flex justify-center items-center">
       <CiMenuFries className="text-[32px] text-accent"/>
    </SheetTrigger>
    <SheetContent className='flex flex-col'>
        <div className='mb-[60px] text-center text-2xl'>
            <Link href='/'>
            <h1 className='text-4xl font-semibold'>Quranic Guide</h1>
            </Link>
        </div> 
        <nav  className='flex flex-col justify-center items-center gap-8'>
           {Links.map((link,index)=>{
                return(
                    <Link href={link.path} key={index} className={`${link.path===pathname &&" text-accent border-b-2 border-accent"} "text-xl capitalize hover:text-accent-hover transition-all`}>
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    </SheetContent>
</Sheet>
  )
}

export default Mobilenav

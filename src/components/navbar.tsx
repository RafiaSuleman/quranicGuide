'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

const Navbar = () => {
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
      const pathname = usePathname();
  return (
    <nav className="flex gap-8 text-primary-foreground">
    {Links.map((link, index) => (
     <>
        <Link
        key={index}
          href={link.path}
          className={`${
            link.path === pathname &&
            " border-b-2 border-accent"
          } capatilize font-medium hover:text-accent transition-all`}>
          {link.name}
        </Link>
        </>
    ))}
  </nav>
  )
}

export default Navbar

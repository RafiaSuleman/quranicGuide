import Link from 'next/link';
import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
const PhoneIcon = () => {
  return (
    <Link href="https://wa.me/03234533030" target='_blank' className='rounded-full bg-green-600 px-2 py-2 flex items-center justify-center fixed bottom-2 right-2'>
    
      <FaWhatsapp className='text-white' size={30}/>
    </Link>
  )
}

export default PhoneIcon

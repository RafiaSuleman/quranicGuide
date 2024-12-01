import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import Goy from './goy'

const Herosection = () => {
  return (
    <div 
      className="h-96" 
      style={{ 
        backgroundImage: 'url("/cover.png")', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
    >
      <div className='flex md:flex-row flex-col'>
        <div className='container'>
          <h1 className='text-[#f4f4f2] text-3xl xl:text-6xl py-7'>
            Learn Quran with <br />Tajweed Online
          </h1>
          <p className='text-white text-2xl'>
            We have the best and most qualified online Quran <br /> 
            tutors for Quran reading, Tajweed, Memorization/Hifz, <br /> 
            and Quranic Arabic.
          </p>
          <div className='mt-[20px] flex gap-3'>
            <div><Button className=''>Start Free Trial</Button></div>
            <div><Goy id="exploreCourses">Explore Courses</Goy></div>
          </div>
        </div>
        <div>
          <Image src="" height="10" width="10" alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Herosection

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav className='fixed top-0 left-0 z-20 w-full flex justify-between items-center px-4 sm:px-8 md:px-16 py-2 bg-white drop-shadow-xl'>
            <div className=''>
                <Image src={'/images/logo/muj-logo.svg'} alt="CirCon'24" width={200} height={50} />
            </div>
            <div>
                <div className='hidden md:flex justify-center items-center gap-4'>
                    <Link href='#Introduction' className='uppercase font-bold text-[12px] px-4 py-2 hover:border hover:border-gray-800 text-white bg-secondaryBg hover:bg-white hover:text-black'>Introduction</Link>
                    <Link href='#Speakers' className='uppercase font-bold text-[12px] px-4 py-2 hover:border hover:border-gray-800 text-white bg-secondaryBg hover:bg-white hover:text-black'>Speakers</Link>
                    <Link href='#' className='uppercase font-bold text-[12px] px-4 py-2 hover:border hover:border-gray-800 text-white bg-secondaryBg hover:bg-white hover:text-black'>Agenda</Link>
                </div>
                <div className='flex md:hidden'></div>
            </div>
        </nav>
    )
}

export default Navbar
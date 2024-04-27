import React from 'react'
import Image from 'next/image'
import iconPath from '../../public/images/space-tourism-icon.png'
import { NavBarItems } from '@/components'

interface NavBarProp {
    handleOpenDrawer: () => void
}

const NavBar: React.FC<NavBarProp> = ({ handleOpenDrawer }) => {
    return <div className="flex w-full p-6 md:p-0 justify-between items-center lg:mt-4 relative">
        <div className="flex-none md:pl-8 lg:pl-10">
            <Image src={iconPath} alt='space tourism icon' />
        </div>
        <div className='flex-none absolute w-1/2 left-32 hidden lg:block'>
            <hr className='border border-[#979797]'/>
        </div>
        <div className="flex-none md:hidden">
            <button className="btn btn-ghost text-[#D0D6F9] p-0" aria-label="open sidebar" onClick={() => handleOpenDrawer()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
        </div>
        <ul className='bg-[#263232] lg:bg-transparent lg:backdrop-blur hidden md:flex h-full px-2 lg:px-12'>
            <NavBarItems />
        </ul>
    </div>
}

export default NavBar;


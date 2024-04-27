import React from 'react'
import Image from 'next/image'
import closeIcon from '../../public/images/close-icon.svg'
import { NavBarItems } from '@/components'

interface SideBarProp {
    handleCloseDrawer: () => void
}

const SideBar: React.FC<SideBarProp> = ({ handleCloseDrawer }) => {
    return <div className="drawer-side text-white">
        <label htmlFor="my-drawer-3" aria-label="close sidebar"></label>
        <ul className="menu px-8 py-10 w-80 min-h-full backdrop-blur">
            {/* Sidebar content here */}
            <div className='flex w-full justify-end pb-10'>
                <Image src={closeIcon} alt='close sidebar' className='hover:cursor-pointer' onClick={() => handleCloseDrawer()}/>
            </div>
            <NavBarItems/>
        </ul>
    </div>
}

export default SideBar
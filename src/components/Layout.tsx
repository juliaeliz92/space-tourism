'use client'
import React, { ReactElement, ReactNode, useState } from 'react';
import { usePathname } from 'next/navigation'
import { NavBar, SideBar } from '@/components';
import styles from '@/app/styles.module.scss';

interface Props {
    children: ReactNode
}

export default function Layout({ children } : Props): ReactElement<Props> {
    const [openDrawer, setOpenDrawer] = useState<boolean>(false)
    let style = {}, active = ''
    const pathname = usePathname()
    if(pathname === '/') {
        style = styles.homepage
        active = 'home'
    } else if(pathname === '/destination') {
        style = styles.destination
        active = 'destination'
    } else if(pathname === '/crew') {
        style = styles.crew
        active = 'crew'
    } else if (pathname === '/technology') {
        style = styles.technology
        active = 'technology'
    }
    return (
        <main className={`flex flex-col h-screen overflow-y-auto bg-cover bg-fixed drawer drawer-end scroll-auto ${style}`}>
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" checked={openDrawer} defaultChecked /> 
            <div className='drawer-content h-full flex flex-col'>
                <NavBar handleOpenDrawer={() => setOpenDrawer(true)} activeItem={active} />
                {children}
            </div>
            <SideBar handleCloseDrawer={() => setOpenDrawer(false)} activeItem={active} />
        </main>
    )
}

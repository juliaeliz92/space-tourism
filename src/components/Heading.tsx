import React, { ReactNode } from "react"
import { bellefair } from '@/app/fonts';

interface HeadingProp {
    children: ReactNode
}

const Heading: React.FC<HeadingProp> = ({children}) => {
    return <h3 className={`text-[#D3D3D3] text-base md:text-2xl lg:text-3xl uppercase ${bellefair.className}`}>{children}</h3>
}

export default Heading
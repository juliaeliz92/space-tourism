import React, { ReactNode } from "react"
import { barlow } from "@/app/fonts"

interface ParagraphProp {
    children: ReactNode
}

const Paragraph: React.FC<ParagraphProp> = ({ children }) => {
    return <p className={`text-base lg:text-lg text-center lg:text-start text-[#D0D6F9] ${barlow.className}`}>{children}</p>
}

export default Paragraph
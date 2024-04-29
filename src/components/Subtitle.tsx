import React from "react"
import { barlow_condensed } from "@/app/fonts"

interface subtitleProps {
    ind: number,
    text: string,
    style?: string
}

const Subtitle:React.FC<subtitleProps> = ({ind, text, style}) => {
    return <h1 className={`text-[#979797] uppercase tracking-widest text-base md:w-full pb-4 md:pb-8 lg:pb-0 ${barlow_condensed.className} ${style}`}>0{ind} <span className="text-white pl-2">{text}</span></h1>
}

export default Subtitle
import React from "react"
import { barlow_condensed } from "@/app/fonts"

interface subtitleProps {
    ind: number,
    text: string
}

const Subtitle:React.FC<subtitleProps> = ({ind, text}) => {
    return <h1 className={`text-[#979797] uppercase tracking-widest text-base md:w-full ${barlow_condensed.className}`}>0{ind} <span className="text-white pl-2">{text}</span></h1>
}

export default Subtitle
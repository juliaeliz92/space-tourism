import React from "react"
import { barlow_condensed } from "@/app/fonts"

interface titleProps {
    destination: string
}

const Title: React.FC<titleProps> = ({destination}) => {
    return <h2 className={`uppercase tracking-widest text-base ${barlow_condensed}`}> <span className='text-white'>{destination}</span></h2>
}

export default Title
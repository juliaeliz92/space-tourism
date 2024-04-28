import React from "react"
import { bellefair } from "@/app/fonts"

interface titleProps {
    destination: string
}

const Title: React.FC<titleProps> = ({destination}) => {
    return <h2 className={`uppercase text-white text-5xl ${bellefair.className}`}> {destination}</h2>
}

export default Title
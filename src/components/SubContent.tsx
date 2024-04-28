import { ReactNode } from "react"
import { bellefair } from "@/app/fonts"

interface SubContentProp {
    children: ReactNode,
    style?: string
}

const SubContent: React.FC<SubContentProp> = ({children, style}) => {
    return <p className={`text-white uppercase ${style} ${bellefair.className}`}>{children}</p>
}

export default SubContent
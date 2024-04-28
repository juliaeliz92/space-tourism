import { ReactNode } from "react"
import { bellefair } from "@/app/fonts"

interface SubContentProp {
    children: ReactNode
}

const SubContent: React.FC<SubContentProp> = ({children}) => {
    return <p className={`text-white uppercase ${bellefair.className}`}>{children}</p>
}

export default SubContent
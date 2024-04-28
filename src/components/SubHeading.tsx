import { barlow_condensed } from "@/app/fonts"

interface SubHeadingProp {
    heading: string
}

const SubHeading: React.FC<SubHeadingProp> = ({heading}) => {
    return <h3 className={`text-[#D0D6F9] mb-px text-sm uppercase ${barlow_condensed.className}`}>{heading}</h3>
}

export default SubHeading
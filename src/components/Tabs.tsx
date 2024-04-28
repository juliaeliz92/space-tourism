import { barlow_condensed } from "@/app/fonts" 

interface tabsProps {
    tabs: string[]
}

interface tabItemProps {
    label: string
}

const TabItem: React.FC<tabItemProps> = ({label}) => {
    return <div className="hover:border-b-2 hover:border-b-white">{label}</div>
}

const Tabs: React.FC<tabsProps> = ({tabs}) => {
    return <div className={`text-white uppercase tracking-widest text-base flex gap-4 ${barlow_condensed.className}`}>
        {tabs.map(((tab, ind) => <TabItem label={tab} key={ind} />))}
    </div>
}

export default Tabs;
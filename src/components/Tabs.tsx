import { barlow_condensed } from "@/app/fonts" 

interface tabsProps {
    selectedTab: string,
    tabs: string[],
    handleTabSelection: (arg: string) => void
}

interface tabItemProps {
    active: boolean,
    label: string,
    handleTabSelection: (arg: string) => void
}

const TabItem: React.FC<tabItemProps> = ({ active, label, handleTabSelection }) => {
    const selectTab = (label: string) => {
        handleTabSelection(label)
    }
    return <div 
        className={`border-b-2 ${active ? 'border-b-white' : 'border-b-transparent'} hover:border-b-white`}
        onClick={() => selectTab(label)}
    >
        {label}
    </div>
}

const Tabs: React.FC<tabsProps> = ({ tabs, selectedTab, handleTabSelection }) => {
    return <div 
        className={`text-white uppercase tracking-widest text-base flex gap-4 ${barlow_condensed.className}`}
    >
        {tabs.map(((tab, ind) => <TabItem active={selectedTab === tab} label={tab} key={ind} handleTabSelection={handleTabSelection}/>))}
    </div>
}

export default Tabs;
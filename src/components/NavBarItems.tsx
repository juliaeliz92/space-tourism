import { barlow_condensed } from '@/app/fonts'

const NAVBAR_OPTIONS: { link: string, label: string } [] = [
    {link: '/', label: 'home'}, 
    {link: '/destination', label: 'destination'}, 
    {link: '/crew', label: 'crew'}, 
    {link: '/technology', label: 'technology'}]

interface NavBarItemProps {
    label: string,
    link: string,
    ind: number,
    active: boolean
}

interface NavBarItemsProps {
    activeItem: string
}

const NavBarItem: React.FC<NavBarItemProps> = ({ label, link, ind, active }) => {
    return <li 
        className={`uppercase text-white text-base md:text-sm py-2 md:mx-6 md:py-8 tracking-wides border-b-2 ${active ? 'border-b-white' : 'border-b-transparent md:border-b-[#263232] lg:border-b-transparent'} hover:border-b-white hover:cursor-pointer ${barlow_condensed.className}`}>
        <span><b className='md:hidden lg:inline-block'>{`0${ind}`}</b> <a href={link}>{label}</a></span>
    </li>
}

const NavBarItems: React.FC<NavBarItemsProps> = ({ activeItem }) => {
    return <>
        {NAVBAR_OPTIONS.map(({ link, label }, ind) => (<NavBarItem key={ind} label={label} link={link} ind={ind} active={activeItem === label}/>))}
    </>
}

export default NavBarItems
import { barlow_condensed } from '@/app/fonts'

const NAVBAR_OPTIONS: { link: string, label: string } [] = [
    {link: '/', label: 'home'}, 
    {link: '/destination', label: 'destination'}, 
    {link: '/crew', label: 'crew'}, 
    {link: '/technology', label: 'technology'}]

interface NavBarItemProp {
    label: string,
    link: string,
    ind: number
}

const NavBarItem: React.FC<NavBarItemProp> = ({ label, link, ind }) => {
    return <li 
        className={`uppercase text-white text-base md:text-sm py-2 md:mx-6 md:py-8 tracking-widest border-b-0 md:border-b-2 lg:border-b-transparent md:border-b-[#263232] hover:border-b-white hover:cursor-pointer ${barlow_condensed.className}`}>
        <span><b className='md:hidden lg:inline-block'>{`0${ind}`}</b> <a href={link}>{label}</a></span>
    </li>
}

const NavBarItems = () => {
    return <>
        {NAVBAR_OPTIONS.map(({ link, label }, ind) => (<NavBarItem key={ind} label={label} link={link} ind={ind}/>))}
    </>
}

export default NavBarItems
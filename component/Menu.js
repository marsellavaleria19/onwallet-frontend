import { Nav } from "react-bootstrap"
// import {MdOutlineDashboard} from "react-icons/md";
import menu from '../styles/menu.module.scss'
import Link from 'next/link'
import {IoGridOutline} from 'react-icons/io5'
import {VscArrowUp} from 'react-icons/vsc'
import {HiPlus} from 'react-icons/hi'
import {RiUser3Line} from 'react-icons/ri'
import { useEffect,useState } from "react"
import { useRouter } from "next/dist/client/router"
import CModal from "./CModal"
import Input from "./Input"

const Menu = ()=>{
    const listMenu = [
        {menu:"Dashboard",link:"/",icon: IoGridOutline},
        {menu:"Transfer",link:"/transaction/receiver",icon: VscArrowUp},
        {menu:"Topup",link:"/transaction/topup",icon: HiPlus},
        {menu:"Profile",link:"/profile",icon: RiUser3Line}]
    
    const [activeMenu,setActiveMenu] = useState("/")
    const router = useRouter()
    
    useEffect(()=>{
        setActiveMenu(router.pathname)
    },[router.pathname])

    return(
        <div className={`${menu.menu} mb-5`}>
            <ul className={menu.menuItem}>
                {
                listMenu.map(item => {
                    const Icon = item.icon
                    return (
                        <li key={item.menu}>
                            <Link href={item.link}>
                                <a className={activeMenu===item.link?'active':''}>
                                    <Icon className='me-3' />
                                    {item.menu}
                                </a>
                            </Link>
                        </li>
                    )
                })}
                {/* <li><Link href="#"><a><IoGridOutline/>Dashboard</a></Link></li>
                <li><Link href="#"><a><VscArrowUp/>Transfer</a></Link></li>
                <li><Link href="#"><a><HiPlus/>Topup</a></Link></li>
                <li><Link href="#"><a><RiUser3Line/>Profile</a></Link></li>
                <li><Link href="#"><a>Logout</a></Link></li> */}
            </ul>
        </div>
    
        // <Nav defaultActiveKey="/home" className={`${menu.menu} flex-column`}>
        //     <Nav.Link className={`${menu.navLink} mt-5 mb-5`} href="/home">Dashboard</Nav.Link>
        //     <Nav.Link className={`${menu.navLink} mb-5`} eventKey="link-1">Transfer</Nav.Link>
        //     <Nav.Link className={`${menu.navLink} mb-5`} eventKey="link-2">Topup</Nav.Link>
        //     <Nav.Link className={`${menu.navLink} mb-5`} eventKey="link-2">Profile</Nav.Link>
        //     <Nav.Link className={`${menu.navLink} mb-5`} eventKey="link-2">Logout</Nav.Link>
        // </Nav>
    )
}

export default Menu

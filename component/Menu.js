import { Nav } from "react-bootstrap"
// import {MdOutlineDashboard} from "react-icons/md";
import variables from '../styles/menu.module.scss'

const Menu = ()=>{
    return(
        <Nav defaultActiveKey="/home" className={`${variables.menu} flex-column`}>
            <Nav.Link className={`${variables.navLink} mt-5 mb-5`} href="/home">Dashboard</Nav.Link>
            <Nav.Link className={`${variables.navLink} mb-5`} eventKey="link-1">Transfer</Nav.Link>
            <Nav.Link className={`${variables.navLink} mb-5`} eventKey="link-2">Topup</Nav.Link>
            <Nav.Link className={`${variables.navLink} mb-5`} eventKey="link-2">Profile</Nav.Link>
            <Nav.Link className={`${variables.navLink} mb-5`} eventKey="link-2">Logout</Nav.Link>
        </Nav>
    )
}

export default Menu

import { Navbar,Container } from "react-bootstrap";
import navbar from '../styles/navbar.module.scss'
import Image from 'next/image'
import CButton from "./CButton";

const NavbarHomepage = ()=>{
    return(
        <Navbar className={navbar.NavbarHomepage} expand="lg">
        <Container>
          <Navbar.Brand className={navbar.navbarBrand} href="#home">On-Wallet</Navbar.Brand>
          <Navbar.Toggle/>
          <Navbar.Collapse className="justify-content-end">
            <CButton className={`${navbar.buttonLogin} me-3`}>Login</CButton>
            <CButton className={navbar.buttonRegister}>Sign Up</CButton>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavbarHomepage
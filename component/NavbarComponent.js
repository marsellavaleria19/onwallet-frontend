import { Navbar,Container } from "react-bootstrap";
import variables from '../styles/navbar.module.scss'
import Image from 'next/image'

const NavbarComponent = ()=>{
    return(
        <Navbar className={variables.navbarLight} variant="dark">
        <Container>
          <Navbar.Brand className={variables.navbarBrand} href="#home">GGWallet</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Image src='/images/image-profile.png' width={70} height={50} alt='profile' className="me-3 rounded-full"/>
            <Navbar.Text>
              <div className={variables.textName}>Robert Chandler</div>
              <div className={variables.textPhone}>+62 8139 3877 7946</div>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavbarComponent
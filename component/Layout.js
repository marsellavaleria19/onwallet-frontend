import NavbarComponent from "./NavbarComponent";
import Footer from "./Footer";
import { Col, Container,Row } from "react-bootstrap";
import Menu from "./Menu";

const Layout = (props)=>{
    return(
        <div>
            <NavbarComponent/>
                <Container>
                    <Row className="mt-5">
                        <Col md="4">
                            <Menu/>
                        </Col>
                        <Col>
                        {props.children}
                        </Col>
                    </Row>
                </Container>
             
            <Footer/>
        </div>
            
    )
}

export default Layout
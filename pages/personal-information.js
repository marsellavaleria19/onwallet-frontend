// import { Button } from "bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import CButton from "../component/CButton";
import Layout from "../component/Layout";
import information from "../styles/information.module.scss";
import variables from "../styles/receiver.module.scss";
import Image from 'next/image';
import Input from "../component/Input";
// import NavbarComponent from "../component/NavbarComponent";

const PersonalInformation= () =>{
    return (
        <Layout>          
            <div className={information.information}>
                <Container className="pt-3">
                    <div className="fs-5 mb-3 fw-bold">Personal Information</div>
                    <p>We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.</p>
                    <Row className={`${information.list} mb-3 ms-3`}>
                        <div>
                            <div className="fs-5 fw-bold">First Name</div>
                            <div className="fs-4">Robert</div>
                        </div>
                    </Row>
                    <Row className={`${information.list} mb-3 ms-3`}>
                        <div>
                            <div className="fs-5 fw-bold">Last Name</div>
                            <div className="fs-4">Chalder</div>
                        </div>
                    </Row>
                    <Row className={`${information.list} mb-3 ms-3`}>
                        <div>
                            <div className="fs-5 fw-bold">Verified E-mail </div>
                            <div className="fs-4">pewdiepie1@gmail.com</div>
                        </div>
                    </Row>
                    <Row className={`${information.list} mb-5 ms-3`}>
                        <div>
                            <Row>
                                <Col xs={6} md={9}>
                                    <div className="fs-5 fw-bold">Phone Number</div>
                                </Col>
                                <Col xs={6} md={2}>
                                    <div className="fs-5">Manage</div>
                                </Col>
                            </Row>  
                            <div className="fs-4">+62 813-9387-7946</div>
                        </div>
                    </Row>
                </Container>
            </div>          
        </Layout>
    )
}

export default PersonalInformation
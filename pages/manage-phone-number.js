// import { Button } from "bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import {FaTrash} from "react-icons/fa";
import Layout from "../component/Layout";
import information from "../styles/information.module.scss";
import Image from 'next/image';
// import NavbarComponent from "../component/NavbarComponent";

const Receiver= () =>{
    return (
        <Layout>          
            <div className={information.information}>
                <Container className="pt-3">
                    <div className="fs-5 mb-3 fw-bold">Manage Phone Number</div>
                    <p>You can only delete the phone number and then you must add another phone number.</p>
                    <Row className={`${information.list} mt-3 mb-3 ms-3`}>
                        <Col xs={6} className="text-start">
                           <h6>Primary</h6>
                           <h4 className="fw-bold">+62 813 9387 7946</h4>
                        </Col>
                        <Col xs={6} className="text-end">
                            <div className="pe-3">
                                <FaTrash/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>          
        </Layout>
    )
}

export default Receiver
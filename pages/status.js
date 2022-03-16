// import { Button } from "bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import CButton from "../component/CButton";
import Layout from "../component/Layout";
import information from "../styles/information.module.scss";
import variables from "../styles/receiver.module.scss";
import Image from 'next/image';
import Input from "../component/Input";
// import NavbarComponent from "../component/NavbarComponent";

const Status= () =>{
    return (
        <Layout>          
            <div className={information.information}>
                <Container className="pt-3">
                    <Row className={`${information.list} mb-3 ms-3`}>
                        <div>
                            <div className="fs-5 fw-bold">Amount</div>
                            <div className="fs-4">Rp100.000</div>
                        </div>
                    </Row>
                    <Row className={`${information.list} mb-3 ms-3`}>
                        <div>
                            <div className="fs-5 fw-bold">Balance Left</div>
                            <div className="fs-4">Rp20.000</div>
                        </div>
                    </Row>
                    <Row className={`${information.list} mb-3 ms-3`}>
                        <div>
                            <div className="fs-5 fw-bold">Date&Time</div>
                            <div className="fs-4">May 11, 2020 - 12.20</div>
                        </div>
                    </Row>
                    <Row className={`${information.list} mb-3 ms-3`}>
                        <div>
                            <div className="fs-5 fw-bold">Notes</div>
                            <div className="fs-4">For buying some socks</div>
                        </div>
                    </Row>
                    <div className="fs-5 ms-3 fw-bold">Transfer</div>
                    <Row className={`${information.list} mb-5 ms-3`}>
                        <Col xs={2}>
                            <Image src="/images/2.png" width={50} height={50}/>
                        </Col>
                        <Col xs={5}>
                            <div className="fs-4">Jessica Keen</div>
                            <div className="fs-6">+62 811-3452-5252</div>
                        </Col>
                    </Row>
                    <div className="text-end mb-3">
                        <CButton className="btn-primary me-3">Download PDF</CButton>
                        <CButton className="btn-primary">Back to Home</CButton>
                    </div>
                </Container>
            </div>          
        </Layout>
    )
}

export default Status
// import { Button } from "bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import CButton from "../component/CButton";
import Layout from "../component/Layout";
import information from "../styles/information.module.scss";
import variables from "../styles/transaction.module.scss";
import Image from 'next/image';
import Input from "../component/Input";
// import NavbarComponent from "../component/NavbarComponent";

const Receiver= () =>{
    return (
        <Layout>          
            <div className={information.information}>
                <Container className="pt-3">
                    <div className="fs-5 mb-3 fw-bold">Search Receiver</div>
                    <Input type="text" placeholder="Search" className={variables.search}/>   
                    <Row className={`${information.list} mt-3 mb-3 ms-3`}>
                        <Col xs={2}>
                            <Image src="/images/2.png" width={50} height={50}/>
                        </Col>
                        <Col xs={5}>
                            <div className="fs-4">Jessica Keen</div>
                            <div className="fs-6">+62 811-3452-5252</div>
                        </Col>
                    </Row>
                    <Row className={`${information.list} mb-3 ms-3`}>
                        <Col xs={2}>
                            <Image src="/images/2.png" width={50} height={50}/>
                        </Col>
                        <Col xs={5}>
                            <div className="fs-4">Jessica Keen</div>
                            <div className="fs-6">+62 811-3452-5252</div>
                        </Col>
                    </Row>
                    <Row className={`${information.list} mb-3 ms-3`}>
                        <Col xs={2}>
                            <Image src="/images/2.png" width={50} height={50}/>
                        </Col>
                        <Col xs={5}>
                            <div className="fs-4">Jessica Keen</div>
                            <div className="fs-6">+62 811-3452-5252</div>
                        </Col>
                    </Row>
                    <Row className={`${information.list} mb-3 ms-3`}>
                        <Col xs={2}>
                            <Image src="/images/2.png" width={50} height={50}/>
                        </Col>
                        <Col xs={5}>
                            <div className="fs-4">Jessica Keen</div>
                            <div className="fs-6">+62 811-3452-5252</div>
                        </Col>
                    </Row>
                </Container>
            </div>          
        </Layout>
    )
}

export default Receiver
// import { Button } from "bootstrap";
import { Col, Row } from "react-bootstrap";
import CButton from "../component/CButton";
import Layout from "../component/Layout";
import variables from "../styles/home.module.scss";
import Image from 'next/image';
// import NavbarComponent from "../component/NavbarComponent";

const Home = () =>{
    return (
        <Layout>    
            <div className={variables.balance}>
                <Row className="mt-4">
                    <Col xs="8"> 
                        <div className="ms-5 mt-4">
                            <div className="fs-6 mb-3">Balance</div>
                            <div className="fs-2 white">Rp120.000</div>
                            <div>+62 813-9387-7946</div>
                        </div>
                    </Col>
                        <Col>
                            <div className="mt-4">
                                <CButton>Transfer</CButton>
                            </div>
                            <div className="mt-3">
                                <CButton>Top Up</CButton>
                            </div>
                           
                        </Col>                        
                    </Row>
            </div>
                    <Row className="mt-3">
                        <Col>
                            <div className={variables.information}>
                            <Row>
                                <Col>
                                    <div className="mt-3 ms-3">
                                        <div className="fs-6">Income</div>
                                        <div className="fs-2">Rp.2.120.000</div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="mt-3 ms-3">
                                        <div className="fs-6">Expense</div>
                                        <div className="fs-2">Rp1.560.000</div>
                                    </div>
                                </Col>
                            </Row>
                            </div>
                        </Col>
                        <Col>
                            <div className={variables.information}>
                                    <Row className="pt-3 ps-2">
                                        <Col xs={2}>
                                            <Image src="/images/1.png" width={50} height={50}/>
                                        </Col>
                                        <Col xs={5}>
                                            <div className="fs-4">Christine Mar...</div>
                                            <div className="fs-6">Accept</div>
                                        </Col>
                                        <Col>
                                        <div className="fs-4">+Rp50.000</div>
                                        </Col>
                                    </Row>
                                    <Row className="mt-3 ms-2">
                                        <Col xs={2}>
                                            <Image src="/images/1.png" width={50} height={50}/>
                                        </Col>
                                        <Col xs={5}>
                                            <div className="fs-4">Christine Mar...</div>
                                            <div className="fs-6">Accept</div>
                                        </Col>
                                        <Col>
                                        <div className="fs-4">+Rp50.000</div>
                                        </Col>
                                    </Row>
                                    <Row className="mt-3 ms-2">
                                        <Col xs={2}>
                                            <Image src="/images/1.png" width={50} height={50}/>
                                        </Col>
                                        <Col xs={5}>
                                            <div className="fs-4">Christine Mar...</div>
                                            <div className="fs-6">Accept</div>
                                        </Col>
                                        <Col>
                                        <div className="fs-4">+Rp50.000</div>
                                        </Col>
                                    </Row>
                            </div>
                        </Col>
                    </Row>
        </Layout>
    )
}

export default Home
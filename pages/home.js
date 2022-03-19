// import { Button } from "bootstrap";
import { Col, Row } from "react-bootstrap";
import CButton from "../component/CButton";
import Layout from "../component/Layout";
import home from "../styles/home.module.scss";
import Image from 'next/image';
import { useSelector } from "react-redux";
// import NavbarComponent from "../component/NavbarComponent";

const Home = () =>{
    const auth = useSelector(state=>state.auth)

    return (
        <Layout>    
            <div className={home.balance}>
                <Row>
                    <Col xs="5" > 
                        <div className="ms-5 mt-4">
                            <div className="fs-4 text-secondary mb-3">Balance</div>
                            <div className="fs-1 fw-bold text-secondary">{auth.balance}</div>
                        </div>
                    </Col>
                        <Col className="text-end me-3 me-md-3 me-xl-5">
                            <div className="mt-4">
                                <CButton className={`${home.button} btn-secondary text-primary fw-bold`}>Transfer</CButton>
                            </div>
                            <div className="mt-3">
                                <CButton className={`${home.button} btn-secondary text-primary fw-bold`}>Top Up</CButton>
                            </div>
                        </Col>                        
                    </Row>
            </div>
                    <Row className="mt-3">
                        <Col md>
                            <div className={home.information}>
                            <Row>
                                <Col md>
                                    <div className="mt-3 ms-3">
                                        <div className="fs-6">Income</div>
                                        <div className="fs-2">Rp.2.120.000</div>
                                    </div>
                                </Col>
                                <Col md>
                                    <div className="mt-3 ms-3">
                                        <div className="fs-6">Expense</div>
                                        <div className="fs-2">Rp1.560.000</div>
                                    </div>
                                </Col>
                            </Row>
                            </div>
                        </Col>
                        <Col md>
                            <div className={home.information}>
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
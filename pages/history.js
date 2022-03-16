// import { Button } from "bootstrap";
import { Col, Row } from "react-bootstrap";
import CButton from "../component/CButton";
import Layout from "../component/Layout";
import variables from "../styles/information.module.scss";
import Image from 'next/image';
// import NavbarComponent from "../component/NavbarComponent";

const History= () =>{
    return (
        <Layout>          
            <div className={variables.information}>
                <Row className="pt-3 ps-3">
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
        </Layout>
    )
}

export default History
// import { Button } from "bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import CButton from "../../component/CButton";
import Layout from "../../component/Layout";
import information from "../../styles/information.module.scss";
import Image from 'next/image';
import Input from "../../component/Input";
import { useSelector } from "react-redux";
import Link from "next/link";
// import NavbarComponent from "../component/NavbarComponent";

const PersonalInformation= () =>{
    const {auth,phone} = useSelector(state=>state)

    return (
        <Layout>          
            <div className={information.information}>
                <Container className="pt-3">
                    <div className="fs-5 mb-3 fw-bold mt-5 text-primary ms-3 me-3">Personal Information</div>
                    <p className="ms-3 me-3 mb-5 text-primary">We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.</p>
                    <Row className={`${information.list} mb-3 ms-3 me-3`}>
                        <div>
                            <div className="fs-5 fw-bold text-primary">First Name</div>
                            <div className="fs-4 text-primary">{auth.user!==null && auth.user.fullName.split(" ")[0]}</div>
                        </div>
                    </Row>
                    <Row className={`${information.list} mb-3 ms-3 me-3`}>
                        <div>
                            <div className="fs-5 fw-bold text-primary">Last Name</div>
                            <div className="fs-4 text-primary">{auth.user!==null && auth.user.fullName.split(" ").filter((item,index)=>index>0).join(" ")}</div>
                        </div>
                    </Row>
                    <Row className={`${information.list} mb-3 ms-3 me-3`}>
                        <div>
                            <div className="fs-5 fw-bold text-primary">Verified E-mail </div>
                            <div className="fs-4 text-primary">{auth.user!==null && auth.user.email}</div>
                        </div>
                    </Row>
                    <Row className={`${information.list} mb-5 ms-3 me-3`}>
                        <div>
                            <Row>
                                <Col xs={6} md={9}>
                                    <div className="fs-5 fw-bold text-primary">Phone Number</div>
                                </Col>
                                <Col xs={6} md={2}>
                                   <Link href="/profile/manage-phone-number"><a className="fs-5 text-primary">Manage</a></Link>
                                </Col>
                            </Row>  
                            {
                                auth.user!==null && phone.listPhone.map((item)=>{
                                    return(
                                    <div className="fs-5 text-primary" key={item.id}>{item.number}</div>
                                    )
                                })
                            }   
                        </div>
                    </Row>
                </Container>
            </div>          
        </Layout>
    )
}

export default PersonalInformation
// import { Button } from "bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import CButton from "../component/CButton";
import Layout from "../component/Layout";
import information from "../styles/information.module.scss";
import variables from "../styles/profile.module.scss";
import Image from 'next/image';
import Input from "../component/Input";
// import NavbarComponent from "../component/NavbarComponent";

const Receiver= () =>{
    return (
        <Layout>          
            <div className={information.information}>
                <Container className="pt-3">
                    <div className="mb-5 ms-3">
                        <div className="text-center mt-3">
                            <Image src="/images/2.png" width={80} height={80} className="mb-2"/>
                            <div><CButton className="mb-3">Edtt</CButton></div>
                            <div className="fs-4 mb-3">Jessica Keen</div>
                            <div className="fs-6">+62 811-3452-5252</div>
                        </div>
                    </div>
                    <div className="text-center">
                        <div><CButton className={`${variables.button} btn-secondary mb-3`}>Personal Information</CButton></div>
                        <div><CButton className={`${variables.button} btn-secondary  mb-3`}>Change Password</CButton></div>
                        <div><CButton className={`${variables.button} btn-secondary  mb-3`}>Change PIN</CButton></div>
                        <div><CButton className={`${variables.button} btn-secondary  mb-3`}>Logout</CButton></div>
                    </div>
                </Container>
            </div>          
        </Layout>
    )
}

export default Receiver
// import { Button } from "bootstrap";
import { Col, Container, Row,Form } from "react-bootstrap";
import CButton from "../component/CButton";
import Layout from "../component/Layout";
import information from "../styles/information.module.scss";
import variables from "../styles/input.module.scss";
import Image from 'next/image';
import Input from "../component/Input";
// import NavbarComponent from "../component/NavbarComponent";

const ChangePassword= () =>{
    return (
        <Layout>          
            <div className={information.information}>
                <Container className="pt-3">
                    <div className="fs-5 mb-3 fw-bold">Change Pin</div>
                    <p>Enter your current 6 digits Zwallet PIN below to continue to the next steps.</p>
                        <form className="text-center mt-5">
                            <Input className={variables.textPin} type="password"/> -
                            <Input className={variables.textPin} type="password"/> -
                            <Input className={variables.textPin} type="password"/> -
                            <Input className={variables.textPin} type="password"/> -
                            <Input className={variables.textPin} type="password"/> -
                            <Input className={variables.textPin} type="password"/>
                            <div className="mt-5">
                                <CButton>Change Pin</CButton>
                            </div>
                        </form>
                </Container>
            </div>          
        </Layout>
    )
}

export default ChangePassword
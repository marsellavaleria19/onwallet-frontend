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
                    <div className="fs-5 mb-3 fw-bold">Change Password</div>
                    <p>You must enter your current password and then type your new password twice.</p>
                        <form className="text-center mt-5">
                            <div className="mb-5">
                            <Input className={variables.textPassword} type="password" placeholder="Current Password"/>
                            </div>
                            <div className="mb-5">
                            <Input className={variables.textPassword} type="password" placeholder="New Password"/>
                            </div>
                            <div className="mb-5">
                            <Input className={variables.textPassword} type="password" placeholder="Repeat New Password"/>
                            </div>
                            <div>
                                <CButton>Change Password</CButton>
                            </div>
                        </form>
                </Container>
            </div>          
        </Layout>
    )
}

export default ChangePassword
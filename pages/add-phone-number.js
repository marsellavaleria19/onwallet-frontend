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
            <div className={`${information.information} mt-3`}>
                <Container className="pt-3">
                    <div className="fs-5 mb-3 fw-bold">Add Phone Number</div>
                    <p>Add at least one phone number for the transfer ID so you can start transfering your money to another user.</p>
                        <form className="text-center mt-5">
                            <div className="mb-5">
                            <Input className={variables.text} type="text" placeholder="Enter yor phone number"/>
                            </div>
                            <div>
                                <CButton className={`${variables.button} btn-primary mb-5`}>Change Phone Number</CButton>
                            </div>
                        </form>
                </Container>
            </div>          
        </Layout>
    )
}

export default ChangePassword
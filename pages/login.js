// import { Button } from "bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import CButton from "../component/CButton";
import Input from "../component/Input";
import login from "../styles/form-login.module.scss";
import input from "../styles/input.module.scss";
import {MdOutlineMailOutline} from "react-icons/md"
import {BiLockAlt,} from 'react-icons/bi'
// import NavbarComponent from "../component/NavbarComponent";

const Home = () =>{
    return (
        <Container fluid className="g-0 vh-100">
            <Row className="g-0 w-100 h-100">
                <Col sm={6} className={login.background}>
                    <div className="p-5">
                        <div className="fs-1 fw-bold text-white mt-5">On-Wallet</div>
                        <div className={login.footer}>
                            <div className="fs-3 text-white fw-bold">App that Covering Banking Needs.</div>
                            <div className="fs-5 text-white mt-3 mb-5">Zwallet is an application that focussing in banking needs for all users
                                in the world. Always updated and always following world trends.
                                5000+ users registered in Zwallet everyday with worldwide
                                users coverage.
                            </div>
                        </div>
                    </div>  
                </Col>
                <Col>
                    <div className="vh-100 overflow-auto">
                        <form className="overflow-auto p-5 me-5 mt-5">
                            <div className="fs-1 text-primary fw-bold">Start Accessing Banking Needs
                                With All Devices and All Platforms
                                With 30.000+ Users</div>
                            <div className="fs-5 text-primary mt-5">Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</div>
                            <div className="mt-5">
                                <div className={input.inputContainer}>
                                    <MdOutlineMailOutline/><Input type="text" className={input.textLoginSignup} placeholder="Enter your e-mail"/>
                                </div>
                                <div className={`${input.inputContainer} mt-5`}>
                                    <BiLockAlt/><Input type="password" className={input.textLoginSignup} placeholder="Enter your password"/>
                                </div>
                                <div className="mt-3 text-end text-primary">Forgot password?</div>
                                <div className="mt-5">
                                    <CButton className={input.button}>Login</CButton>
                                </div>
                                <div className="text-primary mt-3 text-center">Don't have an account? Let's Sign Up</div>
                            </div>
                            
                        </form>
                    </div>
                   
                </Col>
            </Row>
        </Container>    
    )
}

export default Home
// import { Button } from "bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import CButton from "../component/CButton";
import Input from "../component/Input";
import login from "../styles/form-login.module.scss";
import input from "../styles/input.module.scss";
import {MdOutlineMailOutline} from "react-icons/md"
import {BiLockAlt,} from 'react-icons/bi'
import LayoutLogin from "../component/LayoutLogin";
import Link from 'next/link'
// import NavbarComponent from "../component/NavbarComponent";

const Login = () =>{
    return (
     <LayoutLogin>
            <div className="vh-100 overflow-auto">
                <form className="overflow-auto p-5 me-5 mt-5">
                    <div className="fs-1 text-primary fw-bold">Start Accessing Banking Needs
                        With All Devices and All Platforms With 30.000+ Users</div>
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
                            <div className="text-primary mt-3 text-center">Don&apos;t have an account? Let&apos;s <Link href="/register" className="fw-bold">Signup</Link></div>
                        </div>
                    </form>
                </div>   
     </LayoutLogin>   
    )
}

export default Login
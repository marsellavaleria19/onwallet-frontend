// import { Button } from "bootstrap";
import {Form} from "react-bootstrap";
import CButton from "../component/CButton";
import Input from "../component/Input";
// import login from "../styles/form-login.module.scss";
import input from "../styles/input.module.scss";
// import {MdOutlineMailOutline} from "react-icons/md"
import {BiLockAlt} from 'react-icons/bi'
import LayoutLogin from "../component/LayoutLogin";
// import NavbarComponent from "../component/NavbarComponent";

const ForgotPassword = () =>{

    const handleForgotPassword = (event)=>{
        event.preventDefault()
        var newPassword = event.target.elements["newPassword"].value
        var confirmPassword = event.target.elements["confirmPassword"].value
        
    }

    return (
     <LayoutLogin>
            <div className="vh-100 overflow-auto">
                <Form className="overflow-auto p-5 ms-3 me-5 mt-5">
                    <div className="fs-1 text-primary fw-bold">Did You Forgot Your Password? Don’t Worry, You Can Reset Your Password In a Minutes.</div>
                    <div className="fs-5 text-primary mt-5">Now you can create a new password for your On-Wallet account. Type your password twice so we can confirm your new passsword.</div>
                        <div className="mt-5">
                            <div className={`${input.inputContainer} mt-5`}>
                                <BiLockAlt/><Input type="password" name="newPassword" className={input.textLoginSignup} placeholder="Enter your password"/>
                            </div>
                            <div className={`${input.inputContainer} mt-5`}>
                                <BiLockAlt/><Input type="password" name="confirmPassword" className={input.textLoginSignup} placeholder="Confirm your password"/>
                            </div>
                            <div className="mt-5">
                                <CButton className={input.button}>Reset</CButton>
                            </div>
                        </div>
                    </Form>
                </div>   
     </LayoutLogin>   
    )
}

export default ForgotPassword
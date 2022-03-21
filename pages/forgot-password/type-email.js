// import { Button } from "bootstrap";
import {Container} from "react-bootstrap";
import CButton from "../../component/CButton";
import Input from "../../component/Input";
import input from "../../styles/input.module.scss";
import {MdOutlineMailOutline} from "react-icons/md"
import LayoutLogin from "../../component/LayoutLogin";
import { Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { emailProcess } from "../../redux/actions/forgotPassword";
import { useSelector,useDispatch } from "react-redux";
import { useRouter } from "next/router";
// import NavbarComponent from "../component/NavbarComponent";

const EmailFogotPassword = () =>{
    const {forgotPassword} = useSelector(state=>state)
    const [error,setError] = useState({})
    const dispatch = useDispatch()
    const [isSuccess,setIsSuccess] = useState(false)
    const router = useRouter()


    const validation = (email)=>{
        const newErrors = {}
        if(!email || email===''){
            newErrors.email = 'Email must be filled'
        }
        return newErrors;
    }

    const handleConfirmEmail = (event)=>{
        event.preventDefault()
        const email = event.target.elements["email"].value
        var validate = validation(email)
        if(Object.keys(validate).length > 0){
            setError(validate)
        }else{
            dispatch(emailProcess(email))
            setIsSuccess(true)
        }
    }

    return (
     <LayoutLogin>
        <Container>
            <div className="vh-100 overflow-auto">
                <Form className="overflow-auto p-5 me-5 mt-5 ms-5" onSubmit={handleConfirmEmail}>
                    <div className="fs-1 text-primary fw-bold">Did You Forgot Your Password? Don’t Worry, You Can Reset Your Password In a Minutes.</div>
                    <div className="fs-5 text-primary mt-5">To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.</div>
                        <div className="mt-5">
                            {
                                isSuccess && <Alert variant="success">
                                    <Alert.Heading>Success</Alert.Heading>
                                    <p>{forgotPassword.message}</p>
                                </Alert>
                            }
                            <div className={input.inputContainer}>
                                <MdOutlineMailOutline/>
                                <Input type="text" name="email" className={input.textLoginSignup} placeholder="Enter your e-mail"/>
                            </div>
                            {error!==null && error.email ? <div className={input.error}>{error.email}</div> : '' }
                            <div className="mt-5">
                                <CButton type="submit" className={input.button}>Confirm</CButton>
                            </div>
                        </div>
                    </Form>
                </div>  
        </Container> 
     </LayoutLogin>   
    )
}

export default EmailFogotPassword
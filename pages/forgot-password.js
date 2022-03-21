// import { Button } from "bootstrap";
import {Form,Alert} from "react-bootstrap";
import CButton from "../component/CButton";
import Input from "../component/Input";
// import login from "../styles/form-login.module.scss";
import input from "../styles/input.module.scss";
// import {MdOutlineMailOutline} from "react-icons/md"
import {BiLockAlt} from 'react-icons/bi'
import LayoutLogin from "../component/LayoutLogin";
import { validationForgotPassword } from "../helpers/validation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { forgotPasswordProcess } from "../redux/actions/forgotPassword";
// import NavbarComponent from "../component/NavbarComponent";

const ForgotPassword = () =>{
    const {auth,forgotPassword} = useSelector(state=>state)
    const [error,setError] = useState({})
    const [success,setSuccess] = useState({})
    const dispatch = useDispatch()
    const route = useRouter()
    const [dataOtp,setDataOtp] = useState(route.query.otp)

    useEffect(()=>{
        setDataOtp(route.query.otp)
    },[route.query])

    const handleForgotPassword = (event)=>{
        event.preventDefault()
        var data = {}
        data.newPassword = event.target.elements["newPassword"].value
        data.confirmPassword = event.target.elements["confirmPassword"].value
        var validate = validationForgotPassword(data)
        console.log(data)

        if(Object.keys(validate).length > 0){
            setError(validate)
        }else{
            data.otp = dataOtp
            dispatch(forgotPasswordProcess(data))
            if(!forgotPassword.isError){
                route.push('/forgot-password/success-verify')
            }else{
                setError({errMessage:forgotPassword.errMessage})
            }
        }
        // if(validate!==null){
        //     setError(validate)
        // }else if(data.newPassword!=data.confirmPassword){
        //     console.log("masuk!!")
        //     setError({errMessage:"Password not match"})
        //  }else{
        //     data.otp = otp.otp
        //     dispatch(forgotPasswordProcess(data))
        //     if(!forgotPassword.isError){
        //         route.push('/forgot-password/success-verify')
        //     }else{
        //         setError({errMessage:forgotPassword.errMessage})
        //     }
        //  }
    }

    return (
     <LayoutLogin>
            <div className="vh-100 overflow-auto">
                <Form className="overflow-auto p-5 ms-3 me-5 mt-5" onSubmit={handleForgotPassword}>
                    <div className="fs-1 text-primary fw-bold">Did You Forgot Your Password? Don’t Worry, You Can Reset Your Password In a Minutes.</div>
                    <div className="fs-5 text-primary mt-5">Now you can create a new password for your On-Wallet account. Type your password twice so we can confirm your new passsword.</div>
                        <div className="mt-5">
                        {
                                Object.keys(error).length > 0 && error.errMessage && <Alert variant="danger">
                                    {/* <Alert.Heading></Alert.Heading> */}
                                    <p>{error.errMessage}</p>
                                </Alert>
                            }
                            <div className={`${input.inputContainer} mt-5`}>
                                <BiLockAlt/><Input type="password" name="newPassword" className={input.textLoginSignup} placeholder="Enter your password"/>
                            </div>
                            {error!==null && error.newPassword ? <div className={input.error}>{error.newPassword}</div> : '' }
                            <div className={`${input.inputContainer} mt-5`}>
                                <BiLockAlt/><Input type="password" name="confirmPassword" className={input.textLoginSignup} placeholder="Confirm your password"/>
                            </div>
                            {error!==null && error.confirmPassword ? <div className={input.error}>{error.confirmPassword}</div> : '' }
                            <div className="mt-5">
                                <CButton type="submit" className={input.button}>Reset</CButton>
                            </div>
                        </div>
                    </Form>
                </div>   
     </LayoutLogin>   
    )
}

export default ForgotPassword
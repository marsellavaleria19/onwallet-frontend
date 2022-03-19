// import { Button } from "bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import CButton from "../component/CButton";
import Input from "../component/Input";
import input from "../styles/input.module.scss";
import {MdOutlineMailOutline} from "react-icons/md"
import {BiLockAlt,} from 'react-icons/bi'
import LayoutLogin from "../component/LayoutLogin";
import Link from 'next/link'
import { useEffect, useState } from "react";
import { Form,Alert} from "react-bootstrap";
import { useSelector,useDispatch } from "react-redux";
import { loginProcess } from "../redux/actions/auth";
import { useRouter } from "next/router";
// import NavbarComponent from "../component/NavbarComponent";

const Login = () =>{

    const {auth} = useSelector(state=>state)
    const dispatch = useDispatch()
    const [error,setError] = useState({})
    const router = useRouter()

    const validation = (data)=>{
        const newErrors = {}
        if(!data.email || data.email===''){
            newErrors.email = 'Email must be filled'
        }

        if(!data.password || data.password===''){
            newErrors.password = 'Password must be filled'
        }
        return newErrors;
    }

    const loginHandle = (event)=>{
        console.log("masuk!!")
        event.preventDefault()
        var email = event.target.elements["email"].value;
        var password =  event.target.elements["password"].value;
        var data = {email,password}
        var validate = validation(data)

        if(Object.keys(validate).length > 0){
            setError(validate)
        }
        else{
            dispatch(loginProcess(email,password))           
            if(!auth.isError){
                router.push('/home')
            }
        }
         
    }
    
    return (
     <LayoutLogin>
            <div className="vh-100 overflow-auto">
                <Form className="overflow-auto p-5 me-5 mt-5" onSubmit={loginHandle}>
                    <div className="fs-1 text-primary fw-bold">Start Accessing Banking Needs
                        With All Devices and All Platforms With 30.000+ Users</div>
                    <div className="fs-5 text-primary mt-5">Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</div>
                        <div className="mt-5">
                            {
                                auth.isError &&
                                <Alert variant="error" onClose={() => setShow(false)} dismissible>
                                <Alert.Heading>Error</Alert.Heading>
                                <p>{auth.errMessage}</p>
                            </Alert> 

                            }
                            
                            <div className={input.inputContainer}>
                                <MdOutlineMailOutline/>
                                <Input type="text" name="email" className={input.textLoginSignup} placeholder="Enter your e-mail"/>
                            </div>
                            {error!==null && error.email ? <div className={input.error}>{error.email}</div> : '' }
                            <div className={`${input.inputContainer} mt-5`}>
                                <BiLockAlt/>
                                <Input type="password" name="password" className={input.textLoginSignup} placeholder="Enter your password"/>
                            </div>
                            {error!==null && error.password ? <div className={input.error}>{error.password}</div> : '' }
                            <div className="mt-3 text-end text-primary">Forgot password?</div>
                            <div className="mt-5">
                                <CButton type="submit" className={input.button}>Login</CButton>
                            </div>
                            <div className="text-primary mt-3 text-center">Don&apos;t have an account? Let&apos;s <Link href="/register" className="fw-bold">Signup</Link></div>
                        </div>
                    </Form>
                </div>   
     </LayoutLogin>   
    )
}

export default Login
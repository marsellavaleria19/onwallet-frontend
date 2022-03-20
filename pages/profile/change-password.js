// import { Button } from "bootstrap";
import { Col, Container, Row,Form,Alert } from "react-bootstrap";
import CButton from "../../component/CButton";
import Layout from "../../component/Layout";
import information from "../../styles/information.module.scss";
import input from "../../styles/input.module.scss";
import { changePasswordProcess } from "../../redux/actions/changePassword";
import Image from 'next/image';
import Input from "../../component/Input";
import  {BiLockAlt} from "react-icons/bi";
import { validationPassword } from "../../helpers/validation";
import { useState } from "react";
// import NavbarComponent from "../component/NavbarComponent";

const ChangePassword= () =>{
    
    const [error,setError] = useState({})

    const handlePassword = (event)=>{
        var data = {};
        data.currentPassword = event.target.elements["currentPassword"].value;
        data.newPassword = event.target.elements["newPassword"].value;
        data.repeatPassword = event.target.elements["repeatPassword"].value;
        var validate = validationPassword(data)
        if(Object.keys(validate).length > 0){
            setError(validate)
        }else if(data.newPassword!==data.repeatPassword){
            setError({matchPassword:"Password not match"})
        }else{
            dispatch(changePasswordProcess(data))
            router.push('/register/verify-pin')
        }
    }
    return (
        <Layout>          
            <div className={information.information}>
                <Container className="pt-5">
                    <div className="fs-5 mb-3 ms-4 fw-bold text-primary">Change Password</div>
                    <p className="ms-4 text-primary">You must enter your current password and then type your new password twice.</p>
                        <Form className={`${input.formPassword} pe-5 ps-5`} onSubmit={handlePassword}>
                            {
                                Object.keys(error).length>0 && error.matchPassword && <Alert variant="danger">
                                {/* <Alert.Heading></Alert.Heading> */}
                                <p>{error.matchPassword}</p>
                              </Alert>
                            }

                            <div className={`${input.inputContainer} mt-5`}>
                                <BiLockAlt/>
                                <Input type="password" name="currentPassword" className={input.textLoginSignup} placeholder="Current Password "/>
                            </div>
                            {error!==null && error.currentPassword ? <div className={input.error}>{error.currentPassword}</div> : '' }
                            <div className={`${input.inputContainer} mt-5`}>
                                <BiLockAlt/>
                                <Input type="password" name="newPassword" className={input.textLoginSignup} placeholder="New Password "/>
                            </div>
                            {error!==null && error.newPassword ? <div className={input.error}>{error.newPassword}</div> : '' }
                            <div className={`${input.inputContainer} mt-5`}>
                                <BiLockAlt/>
                                <Input type="password" name="repeatPassword" className={input.textLoginSignup} placeholder="Repeat New Password "/>
                            </div>
                            {error!==null && error.repeatPassword ? <div className={input.error}>{error.repeatPassword}</div> : '' }
                            <div>
                                <CButton className={`${input.buttonPassword}`} type="submit">Change Password</CButton>
                            </div>
                        </Form>
                </Container>
            </div>          
        </Layout>
    )
}

export default ChangePassword
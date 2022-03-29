// import { Button } from "bootstrap";
import { Col, Container, Row,Form } from "react-bootstrap";
import CButton from "../../component/CButton";
import Layout from "../../component/Layout";
import information from "../../styles/information.module.scss";
import input from "../../styles/input.module.scss";
import Image from 'next/image';
import Input from "../../component/Input";
import {AiOutlinePhone} from "react-icons/ai"
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { addPhoneNumber } from "../../redux/actions/phone";
import { useRouter } from "next/router";
import {validationPhoneNumber} from "../../helpers/validation"
// import NavbarComponent from "../component/NavbarComponent";

const PhoneNumber= () =>{
    const {auth,phone} = useSelector(state=>state)
    const [error,setError] = useState({})
    const route = useRouter()
    const dispatch = useDispatch()

    const handlePhoneNumber = (event)=>{
        event.preventDefault()
        var phoneNumber = event.target.elements["phone"].value
        var validate = validationPhoneNumber(phoneNumber)
        console.log(validate)
        if(Object.keys(validate).length > 0){
            console.log("masuk!!")
            setError(validate)
        }else{
            dispatch(addPhoneNumber(phoneNumber,auth.token))
            if(phone.isError){
                setError({errMessage:phone.errMessage})
            }else{
                route.push("/profile/manage-phone-number")
            }
        }
    }

    return (
        <Layout>          
            <div className={`${information.information}`}>
                <Container className="pt-3">
                    <div className="ms-5 me-5">
                        <div className="fs-5 mb-3 fw-bold text-primary mt-5">Add Phone Number</div>
                        <p className="text-primary">Add at least one phone number for the transfer ID so you can start transfering your money to another user.</p>
                        <Form className="text-center mt-5" onSubmit={handlePhoneNumber}>
                            <div className={`${input.inputContainer} mt-5`}>
                                <AiOutlinePhone/>
                                <Input type="text" name="phone" className={input.textLoginSignup} placeholder="Phone"/>
                            </div>
                            {error!==null && error.phoneNumber ? <div className={input.error}>{error.phoneNumber}</div> : '' }
                            <div className="mt-5">
                                <CButton type="submit" className={`${input.button} btn-primary mb-5`}>Change Phone Number</CButton>
                            </div>
                        </Form>
                    </div>
                </Container>
            </div>          
        </Layout>
    )
}

export default PhoneNumber
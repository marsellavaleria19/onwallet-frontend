// import { Button } from "bootstrap";
import { Col, Container, Row,Form,Alert } from "react-bootstrap";
import CButton from "../../component/CButton";
import Layout from "../../component/Layout";
import information from "../../styles/information.module.scss";
import PinInput from "react-pin-input"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePinProcess } from "../../redux/actions/changePin";
// import NavbarComponent from "../component/NavbarComponent";

const ChangePin= () =>{
    const {auth} = useSelector(state=>state)
    const {changePin} = useSelector(state=>state)
    const [pin,setPin] = useState(0)
    const [complete,setComplete] = useState(false)
    const [error,setError] = useState("")
    const [success,setSuccess] = useState(false)
    const dispatch = useDispatch()

    const handlePin = (event)=>{
        event.preventDefault()
        dispatch(changePinProcess(null,pin,auth.token))
        if(changePin.isErrpr){
            setError({errMessage:changePin.errMessage})
        }else{
            setSuccess(true)
        }
    }

    return (
        <Layout>          
            <div className={information.information}>
                <Container className="pt-5">
                    <div className="fs-5 mb-3 ms-4 fw-bold text-primary">Change Pin</div>
                    <p className="ms-4 text-primary">Type your new 6 digits security PIN to use in On-wallet..</p>
                        <Form className="text-center mt-5" onSubmit={handlePin}>
                            {
                                Object.keys(error).length > 0 ? <Alert variant="danger">
                                 {/* <Alert.Heading></Alert.Heading> */}
                                    <p>{error.errMessage}</p>
                                </Alert> : 
                                success ? 
                                <Alert variant="success">
                                    <p>{changePin.message}</p>
                                </Alert> : ""
                            }
                            <PinInput 
                                length={6} 
                                initialValue=""
                                onChange={(value, index) => {
                                    setComplete(false)
                                }} 
                                type="numeric" 
                                inputMode="number"
                                onComplete={(value, index) => {
                                    console.log("complete!!")
                                    setPin(value)
                                    setComplete(true)
                                }}
                                autoSelect={true}
                                regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                                />
                                <div className="mt-5">
                                    <CButton disabled={!complete} type="submit">Change Pin</CButton> 
                                {/* {
                                    !complete ? <CButton disabled>Change Pin</CButton> : <CButton type="submit">Change Pin</CButton>
                                } */}
                            </div>
                        </Form>
                </Container>
            </div>          
        </Layout>
    )
}

export default ChangePin
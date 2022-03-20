// import { Button } from "bootstrap";
import CButton from "../../component/CButton";
import input from "../../styles/input.module.scss";
import LayoutLogin from "../../component/LayoutLogin";
import PinInput from "react-pin-input"
import { useEffect, useState } from "react";
import { registrationProcess } from "../../redux/actions/registration";
import { connect, useSelector } from "react-redux";
import { useRouter } from "next/router";
// import NavbarComponent from "../component/NavbarComponent";

const verifyPin = ({registrationProcess}) =>{

    const {registration} = useSelector(state=>state)
    const [pin,setPin] = useState(0)
    const [error,setError] = useState(false)
    const router = useRouter()
    
    const handlePin = (event)=>{
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
        <LayoutLogin>
            <div className="vh-100 overflow-auto">
                <form onSubmit={handlePin} className="overflow-auto p-5 me-5 mt-5">
                    <div className="fs-1 text-primary fw-bold">Secure Your Account, Your Wallet,
                        and Your Data With 6 Digits PIN That You Created Yourself.</div>
                        <div className="fs-5 text-primary mt-5">Create 6 digits pin to secure all your money and your data in On-wallet app. 
                        Keep it secret and don’t tell anyone about your On-wallet account password and the PIN.</div>
                        <div className="mt-5 text-center">
                            <PinInput 
                            length={6} 
                            initialValue=""
                            onChange={(value, index) => {}} 
                            type="numeric" 
                            inputMode="number"
                            onComplete={(value, index) => {
                                setPin(value)
                            }}
                            autoSelect={true}
                            regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                            />
                            {error && <p>Pin harus diisi</p>}
                        </div>
                        <div className="mt-5">
                            <CButton type="submit" className={input.button}>Confirm</CButton>
                        </div>
                    </form>
                </div>
        </LayoutLogin>
    )
}

const mapStateToProps = state => ({registration:state.registration})
const mapDispatchToProps = {registrationProcess}
export default connect(mapStateToProps,mapDispatchToProps)(verifyPin)
// import { Button } from "bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import CButton from "../component/CButton";
import Input from "../component/Input";
import login from "../styles/form-login.module.scss";
import input from "../styles/input.module.scss";
import {MdOutlineMailOutline} from "react-icons/md"
import {BiLockAlt,} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import LayoutLogin from "../component/LayoutLogin";
import PinInput from "react-pin-input"
// import NavbarComponent from "../component/NavbarComponent";

const verifyPin = () =>{
    return (
        <LayoutLogin>
            <div className="vh-100 overflow-auto">
                <form className="overflow-auto p-5 me-5 mt-5">
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
                            onComplete={(value, index) => {}}
                            autoSelect={true}
                            regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                            />
                        </div>
                        <div className="mt-5">
                            <CButton className={input.button}>Confirm</CButton>
                        </div>
                    </form>
                </div>
        </LayoutLogin>
    )
}

export default verifyPin
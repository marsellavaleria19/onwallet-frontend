// import { Button } from "bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import CButton from "../component/CButton";
import Input from "../component/Input";
import login from "../styles/form-login.module.scss";
import input from "../styles/input.module.scss";
import {MdOutlineMailOutline} from "react-icons/md"
import {BiLockAlt,} from 'react-icons/bi'
import {FaCheckCircle} from 'react-icons/fa'
import LayoutLogin from "../component/LayoutLogin";
import PinInput from "react-pin-input"
// import NavbarComponent from "../component/NavbarComponent";

const SuccessVerify = () =>{
    return (
        <LayoutLogin>
            <div className="vh-100 overflow-auto">
               <div className="p-5">
                    <div className="fs-1 text-primary mt-5">
                        <FaCheckCircle/>
                    </div>
                    <div className="fs-1 text-primary fw-bold mt-5">Your PIN Was Successfully Created</div>
                    <div className="fs-5 text-primary mt-5">Your PIN was successfully created and you can now access all the features in On-Wallet. Login to your new account and start exploring!</div>
                    <div className="mt-5">
                        <CButton className={input.button}>Login Now</CButton>
                    </div>
                </div>
            </div>
        </LayoutLogin>
    )
}

export default SuccessVerify
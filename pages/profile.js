// import { Button } from "bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import CButton from "../component/CButton";
import Layout from "../component/Layout";
import information from "../styles/information.module.scss";
import profile from "../styles/profile.module.scss";
import Image from 'next/image';
import {FaPencilAlt} from 'react-icons/fa'
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getListPhoneUser } from "../redux/actions/phone";
import { useEffect } from "react";
import {AiOutlineArrowRight} from "react-icons/ai"
import { useRouter } from "next/router";
// import NavbarComponent from "../component/NavbarComponent";

const PersonalInformation= () =>{
    const {auth,phone} = useSelector(state=>state)
    const dispatch = useDispatch()
    const route = useRouter()

    useEffect(()=>{ 
        dispatch(getListPhoneUser(auth.token))
    },[])
    
    return (
        <Layout>          
            <div className={information.information}>
                <Container className="pt-3">
                    <div className="mb-5 ms-3">
                        <div className="text-center mt-5">
                            <Image src={auth.user!==null ? (auth.user.picture == null ?'/images/profile.png' : auth.user.picture) : '/images/profile.png'} width={80} height={80} className="mb-2"/>
                            <div><Link href="/profile/personal-information"><a className="fs-5"><FaPencilAlt className="me-2"/>Edit</a></Link></div>
                            <div className="fs-4 mb-2 mt-5 text-primary fw-bold">{auth.user!==null && auth.user.fullName}</div>
                            {
                                auth.user!==null && phone.listPhone.map((item)=>{
                                    return(
                                    <div className="fs-5 text-primary" key={item.id}>{item.number}</div>
                                    )
                                })
                            }                            
                        </div>
                    </div>
                    <div className="text-center">
                        <div><CButton className={`${profile.button} btn-primary mb-3`} onClick={()=>route.push("/profile/personal-information")}>Personal Information</CButton></div>
                        <div><CButton className={`${profile.button} btn-primary mb-3`} onClick={()=>route.push("/profile/change-password")}>Change Password</CButton></div>
                        <div><CButton className={`${profile.button} btn-primary mb-3`} onClick={()=>route.push("/profile/verify-pin")}>Change PIN</CButton></div>
                        <div><CButton className={`${profile.button} btn-primary mb-3`}>Logout</CButton></div>
                    </div>
                </Container>
            </div>          
        </Layout>
    )
}

export default PersonalInformation
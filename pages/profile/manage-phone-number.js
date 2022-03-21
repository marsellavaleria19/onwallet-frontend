// import { Button } from "bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import {FaTrash} from "react-icons/fa";
import Layout from "../../component/Layout";
import information from "../../styles/information.module.scss";
import Image from 'next/image';
import CButton from "../../component/CButton";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getListPhoneUser } from "../../redux/actions/phone";
// import NavbarComponent from "../component/NavbarComponent";

const Receiver= () =>{
    const {phone} = useSelector(state=>state)
    const route = useRouter()

    
    return (
        <Layout>          
            <div className={information.information}>
                <Container className="pt-5">
                    <div className="fs-5 mb-3 ms-3 me-3 fw-bold text-primary">Manage Phone Number</div>
                    <p className="ms-3 me-3 text-primary">You can only delete the phone number and then you must add another phone number.</p>
                    {phone !==null && phone.listPhone && phone.listPhone.map((item)=>{
                        return(<Row className={`${information.list} mt-5 mb-3 ms-3 me-3`}>
                         <Col xs={6} className="text-start">
                            {
                                item.isPrimary && <div className="fs-5 text-primary">Primary</div>
                            }
                           
                            <div className="fs-4 text-primary fw-bold">{item.number}</div>
                         </Col>
                         <Col xs={6} className="text-end text-primary">
                             <div className="pe-3">
                                 <FaTrash/>
                             </div>
                         </Col>
                     </Row>)
                    })}
                   
                    <CButton className="btn-primary ms-3" onClick={()=>route.push("/profile/add-phone-number")}>Add phone number</CButton>
                </Container>
            </div>          
        </Layout>
    )
}

export default Receiver
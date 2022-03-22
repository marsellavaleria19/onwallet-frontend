import NavbarComponent from "./NavbarComponent";
import Footer from "./Footer";
import { Col, Container,Row } from "react-bootstrap";
import Menu from "./Menu";
import { useSelector,useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getDataUser,getBalance,getListPhoneProfile } from "../redux/actions/auth";
import { getListHistory } from "../redux/actions/history";
import CModal from "./CModal";

const Layout = (props)=>{

    const auth = useSelector(state=>state.auth)
    const dispatch = useDispatch()
    const router = useRouter()

    useEffect(()=>{
        const token = window.localStorage.getItem('token')
        if(token){
          dispatch({
            type: 'LOGIN_FULFILLED',
            payload: {
              data: {
                results: {
                  token
                }
              }
            }
          })
        dispatch(getDataUser(token))
        dispatch(getBalance(token))
        dispatch(getListPhoneProfile(token))
        dispatch(getListHistory(auth.token))
        }
    },[dispatch,auth.token])
    
    return(
        <div>
            {auth.token!==null &&
                <>
                    <NavbarComponent/>
                        <Container className="g-0 vh-80">
                            <Row className="mt-5">
                                <Col md="5" lg="4" xl="3">
                                    <Menu/>
                                </Col>
                                <Col md="7" xl="9">
                                {props.children}
                                </Col>
                            </Row>
                        </Container>
                    <Footer/>
                </> 
                // :
                // router.push("/login")
            }
            
        </div>
            
    )
}

export default Layout
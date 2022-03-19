import NavbarComponent from "./NavbarComponent";
import Footer from "./Footer";
import { Col, Container,Row } from "react-bootstrap";
import Menu from "./Menu";
import { useSelector,useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";

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
        //   dispatch(getDataUser(token))
        }
    },[dispatch,auth.token])

    return(
        <div>
            {auth.token!==null &&
                <>
                    <NavbarComponent/>
                        <Container>
                            <Row className="mt-5">
                                <Col md="4">
                                    <Menu/>
                                </Col>
                                <Col md="8">
                                {props.children}
                                </Col>
                            </Row>
                        </Container>
                    <Footer/>
                </>
            }
            
        </div>
            
    )
}

export default Layout
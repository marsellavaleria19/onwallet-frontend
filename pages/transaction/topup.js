import { Modal } from "react-bootstrap"
import CButton from "../../component/CButton";
import { useState } from "react";
import CModal from "../../component/CModal";

const Topup = ()=>{
    const [modalShow, setModalShow] = useState(true);
   
    return(
        <CModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    )
}

export default Topup


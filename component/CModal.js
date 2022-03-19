import { Modal } from "react-bootstrap";
import CButton from "./CButton";

const CModal = (props) => {
    console.log("masuk modal!!")
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
                {props.title}             
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {props.children}
        </Modal.Body>
        <Modal.Footer>
          <CButton onClick={props.onHide}>Close</CButton>
        </Modal.Footer>
      </Modal>
    );
}

export default CModal

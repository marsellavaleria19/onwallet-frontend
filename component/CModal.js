import { Modal } from "react-bootstrap";
import CButton from "./CButton";
import { useState } from "react";
import modal from '../styles/modal.module.scss'


const CModal = ({show,functionShow,functionClose,children,title,functionSave}) => {
    return (
        <Modal show={show} onHide={functionClose}  size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
        <CButton variant="primary" onClick={functionSave}>
            Save Changes
        </CButton>
        </Modal.Footer>
    </Modal>
    );
}

export default CModal

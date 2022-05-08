import { Modal } from 'react-bootstrap';
import CButton from './CButton';
import { useState } from 'react';
import modal from '../styles/modal.module.scss';

const CModal = ({show,functionClose,children,title,button,functionSave}) => {
   return (
      <Modal show={show} onHide={functionClose} aria-labelledby="contained-modal-title-vcenter" centered>
         <Modal.Header className={modal.modalHeader} closeButton >
            <Modal.Title>{title}</Modal.Title></Modal.Header>
         <Modal.Body className={modal.modalBody}>
            <div className='text-center'>
               {children}
            </div>
         </Modal.Body>
         <Modal.Footer className={modal.modalBody}>
            <CButton variant='primary' onClick={functionSave}>{button}</CButton>
         </Modal.Footer>
      </Modal>
   //      <Modal show={show} onHide={functionClose}  size="md"
   //      aria-labelledby="contained-modal-title-vcenter"
   //      centered>
   //      <Modal.Header closeButton>
   //      <Modal.Title>{title}</Modal.Title>
   //      </Modal.Header>
   //      <Modal.Body>{children}</Modal.Body>
   //      <Modal.Footer>
   //      <CButton variant="primary" onClick={functionSave}>
   //          Save Changes
   //      </CButton>
   //      </Modal.Footer>
   //  </Modal>
   );
};

export default CModal;

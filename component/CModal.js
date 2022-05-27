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
            <CButton className={modal.buttonModal} onClick={functionSave}>{button}</CButton>
         </Modal.Footer>
      </Modal>
   );
};

export default CModal;

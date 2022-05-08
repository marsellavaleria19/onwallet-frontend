import React from 'react';
import { Modal } from 'react-bootstrap';
import CButton from './CButton';
import {RiErrorWarningFill} from 'react-icons/ri';
import modal from '../styles/modal.module.scss';

const CModalConfirmation = ({title,message,show,close,button,functionHandle}) => {

   return (
      <>
         <Modal show={show} onHide={close} aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header className={modal.modalHeader} closeButton >
               <Modal.Title>{title}</Modal.Title></Modal.Header>
            <Modal.Body className={modal.modalBody}>
               <div className='text-center'>
                  <div>
                     <RiErrorWarningFill size={100} className='modal-icon'/>
                  </div>
                  <div className='fs-1 pps fw-bold text-pallet-1'>Are you sure?</div>
                  <div className='fs-5 pps  text-pallet-1'>{message}</div>
               </div>
            </Modal.Body>
            <Modal.Footer className={modal.modalBody}>
               <CButton btnVarian={'button-delete-item'} onClick={close}>Close</CButton>
               <CButton btnVarian={'button-filled fw-bold'} onClick={functionHandle}>{button}</CButton>
            </Modal.Footer>
         </Modal>
      </>
   );
};

export default CModalConfirmation;
import React from 'react';
import { Modal,Row,Col } from 'react-bootstrap';
import CButton from './CButton';
import {RiErrorWarningFill} from 'react-icons/ri';
import modal from '../styles/modal.module.scss';
import input from '../styles/input.module.scss';

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
               <div className='d-sm-flex justify-content-sm-between mt-5'>
                  <CButton className={`${input.buttonCancel} me-2`} onClick={close}>Close</CButton>
                  <CButton className={input.button} onClick={functionHandle}>{button}</CButton>
               </div>
            </Modal.Body>
         </Modal>
      </>
   );
};

export default CModalConfirmation;
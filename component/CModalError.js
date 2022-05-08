import React from 'react';
import { Modal } from 'react-bootstrap';
import {VscError} from 'react-icons/vsc';
import modal from '../styles/modal.module.scss';

const CModalError = ({ message,show,close}) => {
   return (
      <>
         <Modal show={show} onHide={close} aria-labelledby="contained-modal-title-vcenter" className='modal' centered>
            <Modal.Header className={modal.modalHeader} closeButton />
            <Modal.Body className={`py-5 ${modal.modalBody}`}>
               <div className='text-center'>
                  <VscError size={100} className={modal.modalIcon}/>
                  <div className='fs-1 pps fw-bold text-pallet-1'>Error</div>
                  <div className='fs-4 pps  text-pallet-1'>{message}</div>
               </div>
            </Modal.Body>
         </Modal>
      </>
   );
};

export default CModalError;
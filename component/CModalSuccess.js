/* eslint-disable react/prop-types */
import React from 'react';
import { Modal } from 'react-bootstrap';
import { BiCheckCircle } from 'react-icons/bi';
import CButton from './CButton';
import modal from '../styles/modal.module.scss';

const CModalSuccess = ({message,show,close,button=null,functionHandle}) => {
   return (
      <>
         <Modal show={show} onHide={close} aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header className={modal.modalHeader} closeButton />
            <Modal.Body className={`py-5 ${modal.modalBody}`}>
               <div className='text-center'>
                  <BiCheckCircle size={100} className={modal.modalIcon}/>
                  <div className='fs-1 pps fw-bold text-pallet-1'>Success</div>
                  <div className='fs-4 pps  text-pallet-1'>{message}</div>
               </div>
            </Modal.Body>
            {
               button!==null &&
                  <Modal.Footer className={modal.modalBody}>
                     <CButton className={modal.buttonModal} onClick={functionHandle}>{button}</CButton>
                  </Modal.Footer>
            }
         </Modal>
        
      </>
   );
};

export default CModalSuccess;
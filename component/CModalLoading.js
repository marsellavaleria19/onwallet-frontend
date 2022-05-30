/* eslint-disable react/prop-types */
import React from 'react';
import { Modal, Spinner } from 'react-bootstrap';
import modal from '../styles/modal.module.scss';

const CModalLoading = ({show,close}) => {
 
   return (
      <>
         <Modal show={show} onHide={close} aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header className={modal.modalHeader} closeButton />
            <Modal.Body className={modal.modalBody}>
               <div className='text-center'>
                  <div>
                     <Spinner animation="border" size="xxl" variant='pallet-1' />
                  </div>
                  <div className='fs-4 mt-4'>
              Data is processing
                  </div>
               </div>
            </Modal.Body>
         </Modal>
      </>
   );
};

export default CModalLoading;
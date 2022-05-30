import { Accordion } from 'react-bootstrap';

const CAccordion = ({title,classVariantHeader,classVariantBody,children})=>{
   return(
      <Accordion>
         <Accordion.Item eventKey={'0'}>
            <Accordion.Header className={classVariantHeader}>
               {title}
            </Accordion.Header>
            <Accordion.Body className={classVariantBody}>
               {children}              
            </Accordion.Body>
         </Accordion.Item>
      </Accordion>
   );
};

export default CAccordion;
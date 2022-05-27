import { Form } from 'react-bootstrap';
import {FiChevronDown} from 'react-icons/fi';

const Select = ({options,classVariantForm,classVariantArrow,defaultOptions,...rest})=>{
   return(
      <>
         <Form.Select aria-label="Default select example" className={classVariantForm} {...rest}>
            <option value={''} style={{ display: 'none' }}>{defaultOptions}</option>
            {
               options.map((item)=>{
                  return(
                     <option key={item.value} value={item.value}>{item.name}</option>
                  );
               })
            }
         </Form.Select>
         <FiChevronDown className={classVariantArrow} />
      </>
   );
};

export default Select;
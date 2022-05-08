import { Button as BsButton} from 'react-bootstrap';

const CButton = ({children,...rest})=>{
   return(
      <BsButton {...rest}>{children}</BsButton>);
};

export default CButton;
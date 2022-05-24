import { Form} from 'react-bootstrap';
import variable from '../styles/input.module.scss';

const Input = ({children,...rest})=>{
   return(
      <Form.Control type={rest.type} className="form-control" id="exampleFormControlInput1" {...rest}/>
   );
};

export default Input;
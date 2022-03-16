import { Form} from "react-bootstrap";

const Input = ({children,...rest})=>{
    return(
        <Form.Control
        {...rest}
      />)
}

export default Input
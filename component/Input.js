import { Input as BsInput} from "react-bootstrap";

const Input = ({children,...rest})=>{
    return(
    <BsInput {...rest}>{rest}</BsInput>)
}

export default Input
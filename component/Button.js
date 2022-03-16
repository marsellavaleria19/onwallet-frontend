import { Button as BsButton} from "react-bootstrap";

const Button = ({children,...rest})=>{
    return(
    <BsButton {...rest}>{rest}</BsButton>)
}

export default Button
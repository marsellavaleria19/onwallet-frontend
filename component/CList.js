import information from "../styles/information.module.scss";

const CList = ({children,...rest})=>{
    return(
        <div className={`${information.list} mt-3 mb-3 d-flex align-items-center`}>
            {children}
    </div>)
}

export default CList
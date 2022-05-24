import information from '../styles/information.module.scss';

const CList = ({variant,children,...rest})=>{
   return(
      <div className={`${information.list} ${variant} mt-3 mb-3 d-flex align-items-center`} {...rest}>
         {children}
      </div>);
};

export default CList;
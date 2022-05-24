// HiEmojiSad
import {HiOutlineEmojiSad} from 'react-icons/hi';
import notfound from '../styles/notfound.module.scss'; 

const CNotFound = ()=>{
   return(
      <div className={`${notfound.layoutNotFound} mt-5`}>
         <HiOutlineEmojiSad className={notfound.iconSad}/>
         <div className={`${notfound.textNotFound} mt-2`}>
            Not data Available
         </div>
      </div>
   );
};

export default CNotFound;
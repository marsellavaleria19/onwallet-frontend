const dataChangePassword = {
   data : null,
   message : null,
   isError : false,
   isLoading : false,
   errMessage : null,
   isShowError : false
};

const changePassword = (state=dataChangePassword,action)=>{
    
   switch(action.type){
   case 'CHANGE_PASSWORD_PENDING' : {
      state.isLoading = true;
      return {...state};
   }
   case 'CHANGE_PASSWORD_FULFILLED' : {
      const{data} = action.payload;
      state.isLoading = false;
      state.message = data.message;
      state.isError = false;
      return {...state};
   }
   case 'CHANGE_PASSWORD_REJECTED':{
      if(action.payload.response!==null){
         const {data} = action.payload.response;
         state.isLoading = false;
         state.isError = true;
         state.errMessage = data.message;
         state.isShowError = true;
      }
   }
   default : {
      return {...state};
   }
   }
};

export default changePassword;
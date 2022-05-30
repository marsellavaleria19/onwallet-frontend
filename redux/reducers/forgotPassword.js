const dataForgotPassword = {
   data : null,
   message : null,
   isError : false,
   isLoading : false,
   errMessage : null
};

const forgotPassword = (state=dataForgotPassword,action)=>{
    
   switch(action.type){
   case 'FORGOT_PASSWORD_PENDING' : {
      state.isLoading = true;
      return {...state};
   }
   case 'FORGOT_PASSWORD_FULFILLED' : {
      const{data} = action.payload;
      state.isLoading = false;
      state.message = data.message;
      state.isError = false;
      return {...state};
   }
   case 'FORGOT_PASSWORD_REJECTED':{
      const {data} = action.payload.response;
      state.isLoading = false;
      state.isError = true;
      state.errMessage = data.message;
   }
   default : {
      return {...state};
   }
   }
};

export default forgotPassword;
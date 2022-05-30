const dataRegister = {
   data : null,
   message : null,
   isError : false,
   isLoading : false,
   errMessage : null
};

const registration = (state=dataRegister,action)=>{
   switch(action.type){
   case 'DATA_REGISTRATION' : {
      state.data = action.payload;
      state.message = 'Registration Successfully.';
      return {...state};
   }
   case 'REGISTRATION_PENDING' : {
      state.isLoading = true;
      return {...state};
   }
   case 'REGISTRATION_FULFILLED' : {
      const{data} = action.payload;
      state.isLoading = false;
      state.message = data.message;
      state.isError = false;
      return {...state};
   }
   case 'REGISTRATION_REJECTED':{
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

export default registration;
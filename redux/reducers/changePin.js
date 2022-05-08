const dataChangePin = {
   data : null,
   message : null,
   isError : false,
   isLoading : false,
   errMessage : null
};

const changePin = (state=dataChangePin,action)=>{
    
   switch(action.type){
   case 'CHANGE_PIN_PENDING' : {
      state.isLoading = true;
      return {...state};
   }
   case 'CHANGE_PIN_FULFILLED' : {
      const{data} = action.payload;
      state.isLoading = false;
      state.message = data.message;
      state.isError = false;
      return {...state};
   }
   case 'CHANGE_PIN_REJECTED':{
      const {data} = action.payload.response;
      state.isLoading = false;
      state.isError = true;
      state.errMessage = data.message;
   }
   case 'GET_OLD_PIN' : {
      state.data = action.payload;
      return {...state};
   }
   default : {
      return {...state};
   }
   }
};

export default changePin;
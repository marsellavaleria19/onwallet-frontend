const dataPhone = {
   listPhone : [],
   message : null,
   isError : false,
   isLoading : false,
   errMessage : null
};

const phone = (state=dataPhone,action)=>{
    
   switch(action.type){
   case 'PHONE_PENDING' : {
      state.isLoading = true;
      return {...state};
   }
   case 'PHONE_FULFILLED' : {
      const{data} = action.payload;
      state.listPhone = data.results;
      state.isLoading = false;
      state.message = data.message;
      state.isError = false;
      return {...state};
   }
   case 'PHONE_REJECTED':{
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

export default phone;
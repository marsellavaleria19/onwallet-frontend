const dataHistory = {
   data : null,
   message : null,
   isError : false,
   isLoading : false,
   errMessage : null,
   listHistory : []
};

const history = (state=dataHistory,action)=>{
    
   switch(action.type){
   case 'HISTORY_PENDING' : {
      state.isLoading = true;
      return {...state};
   }
   case 'HISTORY_FULFILLED' : {
      const{data} = action.payload;
      state.isLoading = false;
      state.message = data.message;
      state.listHistory = data.results;
      state.isError = false;
      return {...state};
   }
   case 'HISTORY_REJECTED':{
      const {data} = action.payload.response;
      state.isLoading = false;
      state.isError = true;
      state.errMessage = data.message;
   }
   case 'CLEAR_HISTORY' : {
      return dataHistory;
   }
   default : {
      return {...state};
   }
   }
};

export default history;
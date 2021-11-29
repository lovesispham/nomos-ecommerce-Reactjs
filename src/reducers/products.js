import * as types from './../constants/ActionType'



const products = (state = {}, action) => {
    let newState = { ...state };
        console.log("redux", newState);
    switch(action.type){
        
        
      
        case types.FILTER_PRODUCT_BY_SIZE:
        return {
            ...state,
            size:action.payload.size,
            filteredItems: action.payload.items,
        }
        
        
        case types.ORDER_PRODUCT_BY_PRICE:
        return{
            ...state,
            sort:action.payload.sort,
            filteredItems: action.payload.items,
            
        }
       

        case types.FETCH_PRODUCT:
        
        
         return { 
             items: action.payload, 
             filteredItems: action.payload,
         };

        default : return state;
    }
} 

export default products
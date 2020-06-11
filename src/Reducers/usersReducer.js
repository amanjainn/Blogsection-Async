import { act } from "react-dom/test-utils";

export default (state =[],action)=>{
    switch(action.type){
        case 'FETCH_USER':
            return [...state,action.payload]
            default:
                return state;
    }
}
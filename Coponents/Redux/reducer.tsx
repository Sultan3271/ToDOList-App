import { ADD_TASK, REMOVE_TASK } from "./constants";

const initialState =[];

export const reducer =(state = initialState, action)=>{
 switch(action.type){
    case ADD_TASK:
        return [...state, {...action.data}];
    case REMOVE_TASK:
         return state.filter((item) => item.key !== action.data);
        default :
        return state;
 } 
}
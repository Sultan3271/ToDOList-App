import { ADD_TASK, REMOVE_TASK } from "./constants"

export const addNewTask = (item) =>{
    return {
        type : ADD_TASK,
        data : item
    };
}

export const removeTask = (item) =>{
    return{
        type: REMOVE_TASK,
        data: item
    };
}
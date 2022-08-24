import {ActionTypes} from '../constant/ActionType';

let initialization={
    items:[]
}


export const storeReducer=(state=initialization,{type,payload})=>{

    switch(type){
        case ActionTypes.ADDTOSTORE:
            return {...state,items:payload}
        default:
            return state;
    }
}
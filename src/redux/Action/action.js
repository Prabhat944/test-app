import { ActionTypes } from "../constant/ActionType"

export const AddItem=(item)=>{
    return{
        type:ActionTypes.ADDTOSTORE,
        payload:item
    }
}
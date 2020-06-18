import {SET_AMOUNT, RESET_AMOUNT, CALCULATE} from "../constants/action";

export const setAmount = (payload) =>{
    return{
        type: SET_AMOUNT, payload
    }

};
export const resetAmount = () =>{
    return{
        type: RESET_AMOUNT
    }
};

export const calculate = () =>{
    return{
        type: CALCULATE
    }
};
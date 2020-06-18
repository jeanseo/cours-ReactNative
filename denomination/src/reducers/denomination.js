import {SET_AMOUNT, RESET_AMOUNT, CALCULATE} from "../constants/action";
import _ from 'lodash';

const initialState = {
    amount: '',
    denominations: [
        {value: 1, count:0},
        {value: 5, count:0},
        {value: 10, count:0},
        {value: 20, count:0},
        {value: 50, count:0},
        {value: 100, count:0},
    ]

};

const stateInit = _.cloneDeep(initialState);

export default (state = stateInit, action = {}) => {

    switch (action.type) {
        case SET_AMOUNT:
            console.log(action.payload);
            return {...state, amount: parseInt(action.payload)};

        case RESET_AMOUNT:
            return {...state, amount: initialState.amount, denominations: initialState.denominations};

        case CALCULATE:
            let sum = state.amount;
            //Trier le tableau par ordre décroissant de value
            let denominations = initialState.denominations;
            denominations.sort((a,b) => a.value < b.value);
            denominations.map((d)=> {
                d.count = 0;
                if (d.value <= sum )
                {
                    d.count = Math.floor(sum / d.value);
                    sum -= d.count*d.value;
                }
            });
            return {...state, denominations: denominations };

        default:
            return state;
    }
}
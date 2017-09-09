import * as actionType from '../constants/mailinfo.jsx'

const initiState = {};

export default function mailReducer(state = initiState,action){
    switch(action.type){
        case actionType.INIT_MAILDATA:
            return action.data;
        default:
            return state;
    }
}
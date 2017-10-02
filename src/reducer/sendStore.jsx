import * as actionType from '../constants/mailinfo.jsx'

const initiState = [];

export default function sendData(state = initiState,action){
    switch(action.type){
        case actionType.ADD_SENDDATA:
            return state.concat(action.data)

        default:
            return state;
    }
}
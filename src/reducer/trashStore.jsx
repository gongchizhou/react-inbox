import * as actionType from '../constants/mailinfo.jsx'

const initiState = [];

export default function trashData(state = initiState,action){
    switch(action.type){
        case actionType.ADD_TRASHDATA:
            return state.concat(action.data)

        default:
            return state;
    }
}
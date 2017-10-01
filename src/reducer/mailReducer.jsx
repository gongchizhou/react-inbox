import * as actionType from '../constants/mailinfo.jsx'

const initiState = [];

export default function mailData(state = initiState,action){
    switch(action.type){
        case actionType.INIT_MAILDATA:
            if(state === initiState){
                return state.concat(action.data)
            }else{
                const newData = action.data.map((item)=> Object.assign(item,{id: item.id + state.length}));
                return state.concat(newData)
            }

        case actionType.UPDATE_MAILDATA:
            state.forEach(function(item){
                if(item.id === action.data){
                    item.isLike = !item.isLike;
                }
            });
            return state

        default:
            return state;
    }
}
import * as actionType from '../constants/userinfo.jsx'

const initiState = [];

export default function userData(state = initiState,action){
    switch(action.type){
        case actionType.INIT_USERDATA:
            return action.data;

        case actionType.ADD_USERDATA:
            return state.concat(action.data);

        case actionType.UPDATE_USERDATA:
            state.forEach(function(item){
                if(item.id === action.data.id){
                    const index = state.indexOf(item);
                    const newItem = Object.assign(item,action.data);
                    state.splice(index,1,newItem);
                }
            });
            return state;

        case actionType.RM_USERDATA:
            return state.filter(function(item){
                if(item.id !== action.data.id){
                    return item
                }
            });

        default:
            return state;
    }
}
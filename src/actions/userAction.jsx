import * as actionType from '../constants/userinfo.jsx'

export function initUserData(data){
    return{
        type: actionType.INIT_USERDATA,
        data
    }
} 

export function add(item){
    return{
        type: actionType.ADD_USERDATA,
        data: item
    }
} 

export function update(item){
    return{
        type: actionType.UPDATE_USERDATA,
        data: item
    }
} 

export function remove(item){
    return{
        type: actionType.RM_USERDATA,
        data: item
    }
} 

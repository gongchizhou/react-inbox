import * as actionType from '../constants/mailinfo.jsx'

export function initMailData(data){
    return{
        type: actionType.INIT_MAILDATA,
        data
    }
} 

export function update(id){
    return{
        type: actionType.UPDATE_MAILDATA,
        data: id
    }
} 

export function remove(item){
    return{
        type: actionType.RM_MAILDATA,
        data: item
    }
} 

export function addSend(item){
    return{
        type: actionType.ADD_SENDDATA,
        data: item
    }
} 

export function addTrash(item){
    return{
        type: actionType.ADD_TRASHDATA,
        data: item
    }
} 
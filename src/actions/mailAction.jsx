import * as actionType from '../constants/mailinfo.jsx'

export function initMailData(data){
    return{
        type: actionType.INIT_MAILDATA,
        data
    }
} 

import {combineReducers} from 'redux'
import mailData from './mailReducer'
import sendData from './sendStore'
import trashData from './trashStore'
import userData from './userReducer'

const appReducer = combineReducers({
    mailData,
    sendData,
    trashData,
    userData
})

export default appReducer
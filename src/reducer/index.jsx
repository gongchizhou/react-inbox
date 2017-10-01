import {combineReducers} from 'redux'
import mailData from './mailReducer.jsx'
import userData from './userReducer.jsx'

const appReducer = combineReducers({
    mailData,
    userData
})

export default appReducer
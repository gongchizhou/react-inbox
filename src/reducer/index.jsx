import {combineReducers} from 'redux'
import mailReducer from './mailReducer.jsx'
import userData from './userReducer.jsx'

const appReducer = combineReducers({
    mailReducer,
    userData
})

export default appReducer
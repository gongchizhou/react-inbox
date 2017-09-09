import {createStore} from 'redux'
import appReducer from '../reducer/index.jsx'

export default function configureStore(initialState){
    const store = createStore(appReducer,initialState,
        window.devToolsExtension ? window.devToolsExtension() : undefined
    );
    return store;
}
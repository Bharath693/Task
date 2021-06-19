import {   combineReducers , applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'

import storage from 'redux-persist/lib/storage'
import  TaskReducer from './taskReducer'

 const rootReducer = combineReducers({
     TaskR:TaskReducer
 })
 
const persistConfig = {
    key:"root",
    storage,
}


const middleWare = [thunk]

 const store = createStore(rootReducer , applyMiddleware(...middleWare))

export default store

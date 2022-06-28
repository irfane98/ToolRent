import { combineReducers, createStore,applyMiddleware } from 'redux'
import appReducer from './reducers/appReducer'
import thunk from 'redux-thunk'
import userInfoReducer from './reducers/userInfosReducer'



const rootReducer=combineReducers({
    users:appReducer,
    info:userInfoReducer
})

const store=createStore(rootReducer,applyMiddleware(thunk))

export default store;
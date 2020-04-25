import {combineReducers} from 'redux'
import { connectRouter } from 'connected-react-router'
import { all, fork } from 'redux-saga/effects'
import loginSaga from './login/saga'
// import { History } from 'history'
import loginReducer from './login/reducer'

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    loginReducer
})

function* rootSaga () {
    yield all ([
        fork(loginSaga)
    ])
}
export  {createRootReducer , rootSaga}
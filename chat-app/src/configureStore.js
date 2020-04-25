import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createRootReducer, rootSaga } from './store'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import throttle from 'lodash.throttle'
import { loadState,saveState } from './utils/storage'
export const history = createBrowserHistory()

export default function configureStore(preloadedState) {
    const composeEnhancers = composeWithDevTools({})
    const sagaMiddleware = createSagaMiddleware()
    const persistedState = loadState()


    const store = createStore(
        createRootReducer(history),
        persistedState,
        composeEnhancers(
            applyMiddleware(
                routerMiddleware(history), 
                sagaMiddleware
            )
        )
    )
    store.subscribe(throttle(()=>{
        if(history.location.pathname.includes('/login')){
            saveState({})
        } else {
            saveState(store.getState())
        }
    },1000))
        
    sagaMiddleware.run(rootSaga)
    return store
}
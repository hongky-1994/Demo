import React from 'react';
import {Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import configureStore,{history} from './configureStore'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Routes from './routes';

const store = configureStore()
function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </Provider>
  );
}

export default App;

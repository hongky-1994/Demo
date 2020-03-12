import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./components/App";
import userReducer from "./reducers";

const store = createStore(
  userReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
export default Main;

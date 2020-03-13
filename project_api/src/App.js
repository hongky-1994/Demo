import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import configureStore from "./configureStore";

import AppContainer from "./AppContainer";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;

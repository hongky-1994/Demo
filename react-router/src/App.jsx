import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Form from "./components/form";
import About from "./components/about";
import Home from "./components/home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import userReducer from "./reducers";

const store = createStore(
  userReducer,

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/form">Form</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <hr style={{ width: "200px" }} />
          <Switch>
            <Route path="/" exact children={<Home />} />
            <Route path="/form" children={<Form />} />
            <Route path="/about" children={<About />} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;

import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./store";
import Homepage from "./app/Homepage";
import Employee from "./app/Employee";
import Photos from "./app/Photos";
import Todos from "./app/TodosPage/Todos";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Loading from "./app/Loading";
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

function App() {
  return (
    <Provider store={store}>
      <Loading />
      <Router>
        <nav className="navbar navbar-light bg-light ">
          <ul className="navbar-nav ">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/employee" className="nav-link">
                Employee
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/photos" className="nav-link">
                Photos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/todos" className="nav-link">
                Todos
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/employee">
            <Employee />
          </Route>
          <Route path="/photos">
            <Photos />
          </Route>
          <Route path="/todos">
            <Todos />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;

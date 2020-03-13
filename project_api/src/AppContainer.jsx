import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Weather from "./pages/page1/Weather";

class AppContainer extends Component {
  render() {
    return (
      <Router>
        <header className="header">
          <div className="header__logo">
            <span className="header__logo--container">
              <img
                className="header__logo--image"
                src="https://cdn4.iconfinder.com/data/icons/weather-29/256/sun-512.png"
                alt="LOGO_IMAGE"
              />
            </span>
            <h3>Weather Page</h3>
          </div>
          <nav className="navbar">
            <ul className="navbar__container">
              <li className="navbar__item">
                <Link className="navbar__item--text" to="/">
                  Weather
                </Link>
              </li>
              <li className="navbar__item">
                <Link className="navbar__item--text" to="/about">
                  About
                </Link>
              </li>
              <li className="navbar__item">
                <Link className="navbar__item--text" to="/help">
                  Help
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path="/">
            <Weather />
          </Route>
          <Route path="/about">
            <h3>Trang About</h3>
          </Route>
          <Route path="/help">
            <h3>Trang Help</h3>
          </Route>
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  page1: state.page1
});

export default connect(mapStateToProps)(AppContainer);

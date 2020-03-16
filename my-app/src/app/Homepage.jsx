import React, { Component } from "react";

export default class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        <h1>Welcome to Localhost</h1>
        <p>This page design by Ky Pham</p>
        <hr className="w100" />
        <div>
          <h4>
            <b>Purpose: for testing API function</b>
          </h4>
          <hr />
          <h4>Related article: </h4>
        </div>
        <ul className="homepage-ul">
          <li className="item">
            <a
              href="https://redux.js.org/basics/usage-with-react/"
              target="blank"
              rel="noopener noreferrer"
            >
              REACT-REDUX
            </a>
          </li>
          <li className="item">
            <a
              href="https://reacttraining.com/react-router/web/example/basic"
              target="blank"
              rel="noopener noreferrer"
            >
              REACT-ROUTER
            </a>
          </li>
          <li className="item">
            <a
              href="https://viblo.asia/p/tim-hieu-ve-redux-thunk-Qbq5Qkm4ZD8"
              target="blank"
              rel="noopener noreferrer"
            >
              REACT-THUNK
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

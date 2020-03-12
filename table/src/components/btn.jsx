import React, { Component } from "react";

class Btn extends Component {
  render() {
    return (
      <button className={this.props.class} onClick={this.props.onClick}
      >
        {this.props.innerText}
      </button>
    );
  }
}

export default Btn;

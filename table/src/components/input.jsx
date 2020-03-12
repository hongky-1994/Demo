import React, { Component } from "react";

class Input extends Component {
  render() {
    return (
      <div className="input-wrapper">
        <input
          name={this.props.name}
          type={this.props.type}
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export default Input;

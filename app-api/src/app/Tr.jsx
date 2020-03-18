import React, { Component } from "react";

export default class Tr extends Component {
  render() {
    return (
      <tr>
        <td>
          <input type="checkbox" />
        </td>
        <td>{this.props.user.name}</td>
        <td>{this.props.user.gender}</td>
        <td>{this.props.user.age}</td>
        <td>{this.props.user.job}</td>
      </tr>
    );
  }
}

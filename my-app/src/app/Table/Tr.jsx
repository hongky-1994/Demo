import React, { Component } from "react";

export default class Tr extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.user.id}</td>
        <td>{this.props.user.name}</td>
        <td>{this.props.user.email}</td>
        <td>{this.props.user.phone}</td>
        <td>
          {this.props.user.address.street +
            " - " +
            this.props.user.address.city}
        </td>
        <td>{this.props.user.website}</td>
        <td>{this.props.user.company.name}</td>
      </tr>
    );
  }
}

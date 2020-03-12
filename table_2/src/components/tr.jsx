import React, { Component } from "react";

class Tr extends Component {
  state = {};

  render() {
    const props = this.props;

    return (
      <tr>
        <th scope="row">{props.index + 1}</th>
        <td>{props.value.name}</td>
        <td>{props.value.age}</td>
        <td>
          <button
            className="btn btn-success"
            onClick={() => {
              props.displayModal("edit");
              props.onEdit(props.index);
            }}
          >
            <i className="material-icons">edit</i>
          </button>
          &nbsp;
          <button
            className="btn btn-danger"
            onClick={() => props.onDelete(props.index)}
          >
            <i className="material-icons">delete</i>
          </button>
        </td>
      </tr>
    );
  }
}

export default Tr;

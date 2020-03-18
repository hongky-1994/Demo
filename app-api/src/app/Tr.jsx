import React, { Component } from "react";
import { removeUser, isEditing } from "../store/actions";
import { connect } from "react-redux";

class Tr extends Component {
  state = {
    rowColor: false,
    isEditing: false
  };
  isEditing = () => {
    this.setState({ isEditing: !this.state.isEditing });
    this.props.isEditing();
  };
  render() {
    return (
      <tr className={this.state.rowColor ? "bg-blue" : ""}>
        <td>
          <label className="label-container">
            <input
              type="checkbox"
              onChange={() => this.setState({ rowColor: !this.state.rowColor })}
            />
            <span className="checkmark"></span>
          </label>
        </td>
        {this.state.isEditing ? (
          <>
            <td>
              <input className="form-control" type="text" />
            </td>
            <td>
              <input className="form-control" type="text" />
            </td>
            <td>
              <input className="form-control" type="text" />
            </td>
            <td>
              <input className="form-control" type="text" />
            </td>
            <td className="action-group">
              <button className="btn btn-outline-success">Apply</button>
              {"  "}
              <button
                className="btn btn-outline-danger"
                onClick={this.isEditing}
              >
                Cancel
              </button>
            </td>
          </>
        ) : (
          <>
            <td>{this.props.user.name}</td>
            <td>{this.props.user.gender}</td>
            <td>{this.props.user.age}</td>
            <td>{this.props.user.job}</td>

            <td className="action-group">
              <button
                className="btn btn-outline-success"
                onClick={this.isEditing}
                disabled={this.props.isStateEditing}
              >
                Edit
              </button>
              {"  "}
              <button
                className="btn btn-outline-danger"
                onClick={() => this.props.removeUser(this.props.index)}
                disabled={this.props.isStateEditing}
              >
                Remove
              </button>
            </td>
          </>
        )}
      </tr>
    );
  }
}
const mapStateToProps = state => ({ isStateEditing: state.isEditing });
const mapDispatchToProps = { removeUser, isEditing };
export default connect(mapStateToProps, mapDispatchToProps)(Tr);

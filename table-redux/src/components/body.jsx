import React, { Component } from "react";
import { connect } from "react-redux";
import { remove, rowSelected, isEditing } from "../actions/addToList";
import TdInput from "./tdInput";

class TableBody extends Component {
  onChecked = index => {
    this.props.rowSelected(index);
  };

  isSelected = () => {
    for (let index = 0; index < this.props.userInfo.length; index++) {
      const element = this.props.userInfo[index];
      if (element.checked) {
        return true;
      }
    }
    return false;
  };
  isEditing = () => {
    for (let index = 0; index < this.props.userInfo.length; index++) {
      const element = this.props.userInfo[index];
      if (element.editing) {
        return true;
      }
    }
    return false;
  };

  render() {
    return (
      <tbody>
        {this.props.userInfo.map((user, index) => (
          <tr key={user.name}>
            <td>
              <input
                type="checkbox"
                onChange={() => this.onChecked([index])}
                checked={this.props.userInfo[index].checked}
                disabled={this.isEditing()}
              />
            </td>
            <TdInput user={user} index={index} />
            {!this.props.userInfo[index].editing && (
              <td style={{ width: "200px" }}>
                <button
                  className="btn btn-info"
                  onClick={() => this.props.isEditing(index)}
                  disabled={this.isSelected() || this.isEditing()}
                >
                  <i className="material-icons">build</i>
                </button>
                &nbsp; &nbsp;
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    this.props.rowSelected([index]);
                    this.props.remove();
                  }}
                  disabled={this.isSelected() || this.isEditing()}
                >
                  <i className="material-icons">delete</i>
                </button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    );
  }
}

function MapStateToProps(state) {
  return { userInfo: state.userInfo };
}

const MapDispatchToProps = { remove, rowSelected, isEditing };

export default connect(MapStateToProps, MapDispatchToProps)(TableBody);

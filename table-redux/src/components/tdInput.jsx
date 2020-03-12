import React, { Component } from "react";
import { connect } from "react-redux";
import { isEditing, edited } from "../actions/addToList";

class TdInput extends Component {
  state = {
    curentInfo: { name: "", age: "", score: "", editing: false, checked: false }
  };

  handleEdit = () => {
    if (
      this.state.curentInfo.name !== "" ||
      this.state.curentInfo.age !== "" ||
      this.state.curentInfo.score !== ""
    ) {
      this.props.edited(this.state.curentInfo, this.props.index);
    }
  };
  render() {
    return (
      <React.Fragment>
        {this.props.userInfo[this.props.index].editing && (
          <React.Fragment>
            <td>
              <input
                className="td-Input"
                placeholder={this.props.user.name}
                onChange={e => {
                  this.setState({
                    curentInfo: {
                      ...this.state.curentInfo,
                      name: e.target.value
                    }
                  });
                }}
              />
            </td>
            <td>
              <input
                className="td-Input"
                placeholder={this.props.user.age}
                type="number"
                min="0"
                onChange={e => {
                  this.setState({
                    curentInfo: {
                      ...this.state.curentInfo,
                      age: e.target.value
                    }
                  });
                }}
              />
            </td>
            <td>
              <input
                className="td-Input"
                placeholder={this.props.user.score}
                min="0"
                step="any"
                onChange={e => {
                  this.setState({
                    curentInfo: {
                      ...this.state.curentInfo,
                      score: e.target.value
                    }
                  });
                }}
              />
            </td>
            <td style={{ width: "200px" }}>
              <button
                className="btn btn-success"
                onClick={() => this.handleEdit()}
              >
                <i className="material-icons">done</i>
              </button>
              &nbsp; &nbsp;
              <button
                className="btn btn-danger"
                onClick={() => this.props.isEditing(this.props.index)}
              >
                <i className="material-icons">cancel</i>
              </button>
            </td>
          </React.Fragment>
        )}
        {!this.props.userInfo[this.props.index].editing && (
          <React.Fragment>
            <td>{this.props.user.name}</td>
            <td>{this.props.user.age}</td>
            <td>{this.props.user.score}</td>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

function MapStateToProps(state) {
  return {
    userInfo: state.userInfo
  };
}
const MapDispatchToProps = { isEditing, edited };

export default connect(MapStateToProps, MapDispatchToProps)(TdInput);

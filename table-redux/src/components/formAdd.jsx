import React, { Component } from "react";
import { connect } from "react-redux";
import { addNew, remove, isEditing } from "../actions/addToList";

class FormAdd extends Component {
  state = {
    isAddButtonToggle: false
  };
  handleSubmit = e => {
    e.preventDefault();
    let newUser = {
      name: e.target.name.value,
      age: e.target.age.value,
      score: e.target.score.value
    };
    this.props.addNew(newUser);
    e.target.name.value = "";
    e.target.age.value = "";
    e.target.score.value = "";
    this.setState({ isAddButtonToggle: false });
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
    const addBtnStyle = {
      display: `${this.state.isAddButtonToggle ? "none" : "block"}`,
      width: `${!this.state.isAddButtonToggle ? "fit-content" : "0"}`,
      overflow: "hidden",
      whiteSpace: "nowrap",
      transition: "width 1s ease"
    };
    const divStyle = {
      width: "90%",
      margin: "auto",
      display: "flex",
      justifyContent: "center"
    };
    return (
      <div style={divStyle}>
        <button
          onClick={() => this.setState({ isAddButtonToggle: true })}
          className="btn btn-info p-2 m-1"
          style={addBtnStyle}
          disabled={this.isEditing()}
        >
          ADD NEW
        </button>
        <form
          className={`form--custom m-1 ${
            this.state.isAddButtonToggle ? "show" : ""
          }`}
          onSubmit={this.handleSubmit}
        >
          <input
            name="name"
            type="text"
            className="m-1 p-2 form-control"
            placeholder="Enter Name"
            required
          />
          <input
            name="age"
            type="number"
            className="m-1 p-2 form-control"
            placeholder="Enter Age"
            min="0"
            required
          />
          <input
            name="score"
            type="number"
            className="m-1 p-2 form-control"
            placeholder="Enter Score"
            step="any"
            required
          />
          <button type="submit" className="btn btn-info btn-lg">
            Confirm
          </button>
          &nbsp;
          <button
            type="button"
            onClick={() => this.setState({ isAddButtonToggle: false })}
            className="btn btn-danger btn-lg"
          >
            Close
          </button>
        </form>
        <button
          className="btn btn-danger p-2 m-1 "
          style={addBtnStyle}
          onClick={() => this.props.remove()}
          disabled={this.isEditing()}
        >
          REMOVE SELECTED
        </button>
      </div>
    );
  }
}
function MapStateToProps(state) {
  return { userInfo: state.userInfo };
}
const MapDispatchToProps = { addNew, remove, isEditing };

export default connect(MapStateToProps, MapDispatchToProps)(FormAdd);

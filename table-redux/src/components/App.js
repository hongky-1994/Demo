import React, { Component } from "react";
import Body from "./body";
import FormAdd from "./formAdd";
import { connect } from "react-redux";
import { rowSelected } from "../actions/addToList";

class App extends Component {
  handleChange = e => {
    let users = this.props.userInfo;
    for (let index = 0; index < users.length; index++) {
      const user = users[index];
      if (e.target.checked !== user.checked) {
        this.props.rowSelected([index]);
      }
    }
  };

  checkAll = data => {
    const check = data.every(item => item.checked);
    return check;
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
      <div className="App">
        {console.log(this.props)}

        <FormAdd />
        <table className="table table-dark">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  checked={this.checkAll(this.props.userInfo)}
                  onChange={this.handleChange}
                  disabled={this.isEditing()}
                />
              </th>
              <th>Name</th>
              <th>Age</th>
              <th>Score</th>
              <th>Action</th>
            </tr>
          </thead>
          <Body />
        </table>
      </div>
    );
  }
}

function MapStateToProps(state) {
  return { userInfo: state.userInfo };
}
const MapDispatchToProps = { rowSelected };
export default connect(MapStateToProps, MapDispatchToProps)(App);

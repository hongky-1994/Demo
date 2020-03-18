import React, { Component } from "react";
import { connect } from "react-redux";
import fetchData from "../store/fetchData";
import Tr from "./Tr";
import Form from "./Form";
import fetchDataAdd from "../store/fetchDataAdd";

class AppContainer extends Component {
  state = { isAddUser: false };
  openForm = () => {
    this.setState({ isAddUser: !this.state.isAddUser });
  };

  componentDidMount = () => {
    this.props.fetchData();
  };

  isEditing = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };
  render() {
    return (
      <div>
        <div className="button-group">
          <button className="btn btn-info m-2" onClick={this.props.fetchData}>
            Load data from my server
          </button>
          <button
            className="btn btn-warning m-2"
            onClick={() => this.props.fetchDataAdd(this.props.users)}
          >
            Update data to Server
          </button>
          ---------------------------------------
          <button className="btn btn-success m-2" onClick={this.openForm}>
            Add new
          </button>
        </div>
        {this.state.isAddUser ? (
          <Form height={"100px"} openForm={this.openForm} />
        ) : (
          <Form height={"0px"} openForm={this.openForm} />
        )}
        <table className="table ">
          <thead>
            <tr>
              <th>
                <label className="label-container">
                  <input
                    type="checkbox"
                    onChange={() =>
                      this.setState({ rowColor: !this.state.rowColor })
                    }
                  />
                  <span className="checkmark"></span>
                </label>
              </th>
              <th>Name</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Job</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map((user, index) => (
              <Tr key={index + user.name} user={user} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({ users: state.users });
const mapDispatchToProps = { fetchData, fetchDataAdd };
export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);

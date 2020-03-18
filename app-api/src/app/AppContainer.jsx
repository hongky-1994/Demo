import React, { Component } from "react";
import { connect } from "react-redux";
import fetchData from "../store/fetchData";
import Tr from "./Tr";

class AppContainer extends Component {
  render() {
    return (
      <div>
        <button className="btn btn-info" onClick={() => this.props.fetchData()}>
          Load data from my server
        </button>
        <table className="table ">
          <thead>
            <tr>
              <th>
                <input type="checkbox" name="checkAll" id="checkAll" />
              </th>
              <th>Name</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Job</th>
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
const mapDispatchToProps = { fetchData };
export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);

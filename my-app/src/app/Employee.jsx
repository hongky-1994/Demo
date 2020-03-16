import React, { Component } from "react";
import { fetchData } from "../store/fetchData";
import { connect } from "react-redux";
import Tr from "./Table/Tr";

class AppContainer extends Component {
  render() {
    return (
      <>
        <div className="row p-2" style={{ justifyContent: "space-evenly" }}>
          <button
            className="btn btn-info"
            onClick={() =>
              this.props.fetchData(
                "users",
                "https://jsonplaceholder.typicode.com/users"
              )
            }
          >
            Refresh Data
          </button>
          <h1>
            <b>EMPLOYEE TABLE</b>
          </h1>
        </div>
        <table className="table table-dark">
          <thead>
            <tr>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Website</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map(user => (
              <Tr key={user.id} user={user} />
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

const mapStateToProps = state => ({ users: state.users });

const mapDispatchToProps = { fetchData };

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);

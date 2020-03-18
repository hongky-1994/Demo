import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewUser } from "../store/actions";
import fetchDataAdd from "../store/fetchDataAdd";

class Form extends Component {
  state = {
    name: "",
    age: "",
    gender: "",
    job: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addNewUser({
      ...this.state
    });
    this.resetForm();
  };
  resetForm = () => {
    this.setState({
      name: "",
      age: "",
      gender: "",
      job: ""
    });
  };
  render() {
    return (
      <form
        className="form__add"
        style={{ height: this.props.height }}
        onSubmit={this.handleSubmit}
      >
        <div className="form-group row">
          <div className="col-4">
            <div className="row mb-2">
              <label className="col-4 col-form-label" htmlFor="name">
                Name
              </label>
              <input
                name="name"
                id="name"
                className="col-8 form-control"
                type="text"
                placeholder="Enter new name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
            <div className="row">
              <label className="col-4 col-form-label" htmlFor="gender">
                Gender
              </label>
              <select
                name="gender"
                id="gender"
                className="col-8 form-control"
                placeholder="Select gender"
                type="text"
                value={this.state.gender}
                onChange={this.handleChange}
              >
                <option value="">--Select user gender--</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
          <div className="col-4">
            <div className="row mb-2">
              <label className="col-4 col-form-label" htmlFor="age">
                Age
              </label>
              <input
                name="age"
                id="age"
                className="col-8 form-control"
                type="text"
                placeholder="Enter age info"
                value={this.state.age.replace(/\D/g, "")}
                onChange={this.handleChange}
              />
            </div>
            <div className="row">
              <label className="col-4 col-form-label" htmlFor="job">
                Job
              </label>
              <input
                name="job"
                id="job"
                className="col-8 form-control"
                type="text"
                placeholder="Enter job info"
                value={this.state.job}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="col-2">
            <button type="submit" className="btn btn-success w-100 h-100">
              Add New
            </button>
          </div>
          <div className="col-2">
            <button
              type="reset"
              className="btn btn-danger w-100 h-100"
              onClick={() => {
                this.props.openForm();
                this.resetForm();
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    );
  }
}
const mapStateToProps = state => ({ users: state.users });
const mapDispatchToProps = { addNewUser, fetchDataAdd };
export default connect(mapStateToProps, mapDispatchToProps)(Form);

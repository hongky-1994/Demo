import React, { Component } from "react";

class Modal extends Component {
  state = {
    newUser: { name: "", age: "" }
  };

  validate = () => {
    const { newUser } = this.state;
    if (newUser.name && newUser.age && newUser.age.length <= 3) {
      this.props.tittle === "ADD USER" && this.props.onAdd(this.state.newUser);
      console.log("validate AddRun");

      this.props.tittle === "EDIT USER" &&
        this.props.onUpdateUser(this.state.newUser, this.props.index);
      this.props.displayModal();
    } else {
      return;
    }
  };

  componentDidMount = () => {
    const { newUser } = this.state;
    newUser.name = this.props.value.name;
    newUser.age = this.props.value.age;

    this.setState({ newUser });
  };

  render() {
    const { props } = this;
    console.log(props);

    return (
      <div className="modal-background">
        <div className="modal-container">
          <div className="modal-header">
            <h5>{props.tittle}</h5>
          </div>
          <div className="modal-body">
            <input
              className="modal-input"
              type="text"
              placeholder="Name"
              name="name"
              value={this.state.newUser.name}
              onChange={e => {
                const { newUser } = this.state;
                newUser.name = e.target.value;
                this.setState({ newUser });
              }}
            />
            <input
              className="modal-input"
              type="text"
              placeholder="Age"
              name="age"
              value={this.state.newUser.age}
              onChange={e => {
                const { newUser } = this.state;
                newUser.age = e.target.value.replace(/\D/g, "");
                this.setState({ newUser });
              }}
            />
          </div>
          <div className="modal-footer">
            <button className="btn btn-success" onClick={this.validate}>
              Confirm
            </button>
            <button className="btn btn-danger" onClick={props.displayModal}>
              Back
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;

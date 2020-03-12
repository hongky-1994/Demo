import React, { Component } from "react";
import Tr from "./tr";
import Modal from "./modal";

class AppContainer extends Component {
  state = {
    datas: [
      { name: "Pham Hong Ky", age: 20 },
      { name: "Pham Hong Hanh", age: 15 },
      { name: "Pham Hong Thuy", age: 90 },
      { name: "Pham Hong Hen", age: 30 }
    ],
    modal: {
      add: { display: false },
      edit: { display: false },
      value: { name: "", age: "" },
      index: ""
    }
  };

  displayModal = parameter => {
    let modal = this.state.modal;
    let x = modal[parameter];
    x.display = !x.display;
    this.setState({ modal });
  };

  onEdit = index => {
    const { modal } = this.state;
    modal.value = this.state.datas[index];
    modal.index = index;
    this.setState({ modal });
    console.log(modal);
  };

  onDelete = index => {
    const { datas } = this.state;
    datas.splice(index, 1);
    this.setState({ datas });
  };

  onAdd = newUser => {
    const { datas } = this.state;
    datas.push(newUser);
    this.setState({ datas });
  };
  onUpdateUser = (newUser, index) => {
    const { datas } = this.state;
    datas[index] = newUser;
    this.setState({ datas });
  };

  render() {
    return (
      <div className="App">
        <button
          className="btn btn-success btn-add"
          onClick={() => this.displayModal("add")}
          >
          Add
        </button>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th>Name</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.datas.map((data, index) => (
              <Tr
                key={data.name}
                value={data}
                index={index}
                displayModal={this.displayModal}
                onDelete={this.onDelete}
                onEdit={this.onEdit}
              />
            ))}
          </tbody>
        </table>
        {this.state.modal.add.display && (
          <Modal
            tittle="ADD USER"
            displayModal={() => this.displayModal("add")}
            onAdd={this.onAdd}
            value={{ name: "", age: "" }}
          />
        )}
        {this.state.modal.edit.display && (
          <Modal
            tittle="EDIT USER"
            displayModal={() => this.displayModal("edit")}
            value={this.state.modal.value}
            onUpdateUser={this.onUpdateUser}
            index={this.state.modal.index}
          />
        )}
      </div>
    );
  }
}

export default AppContainer;

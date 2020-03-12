import React, { Component } from "react";
import "./App.css";
import Tbody from "./tbody";
import Th from "./th";
import Modal from "./modal";

class App extends Component {
  state = {
    data: [
      { name: "Pham Hong Ky", age: 26, sex: "Nam" },
      { name: "Pham Hong Hanh", age: 18, sex: "Nu" }
    ],
    modal: {
      display: false,
      isAdd: true,
      tittle: "",
      modalData: { name: "", age: "", sex: "" }
    },
    head: ["STT", "Ho va ten", "Tuoi", "Gioi tinh", "Action"]
  };

  handleModal = index => {
    let modal = this.state.modal;
    modal.display = !modal.display;
    this.setState({ modal });
console.log('index ',index);

    if (index !== "add") {
      //  Change tittle modal
      modal.tittle = "Edit User";
      //value modalData
      modal.modalData = this.state.data[0];
      console.log("modal", modal);
      this.setState({ modal });
    } else {
      modal.tittle = "Add New User";
      modal.modalData = { name: "", age: "", sex: "" };
      this.setState({ modal });

    }

  };
  handleEdit = () => {};
  handleAdd = (name, age, sex) => {
    const data = [...this.state.data, { name: name, age: age, sex: sex }];
    this.setState({ data: data });
  };

  handleDelete = index => {
    console.log(index);

    let data = this.state.data;
    data.splice(index, 1);
    this.setState({ data: data });
  };

  props1 = index => {
    console.log("props1", index);
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <button
            className="btn btn-edit"
            onClick={() => this.handleModal("add")}
          >
            ADD NEW
          </button>
          <table className="table">
            <thead className="table__head">
              <tr className="table__row">
                {this.state.head.map((item, i) => (
                  <Th key={i} class={"data head-data"} value={item} />
                ))}
              </tr>
            </thead>
            <Tbody
              data={this.state.data}
              onDelete={this.handleDelete}
              onModal={(index) => {
                this.handleModal();
                const modal = this.state.modal;
                modal.isAdd = false;
                this.setState({ modal });

              }}
            />
          </table>
          {this.state.modal.display && (
            <Modal
              onAdd={this.handleAdd}
              onCancel={this.handleModal}
              data={this.state.data}
              modal={this.state.modal}
              tittle={this.state.modal.tittle}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;

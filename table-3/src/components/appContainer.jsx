import React, { Component } from "react";
import Tr from "./tr";
import Input from "./input";

class AppContainer extends Component {
  state = {
    datas: [
      {
        id: "yh01",
        name: "Pham Hong Ky",
        age: "18",
        class: "12A2",
        score: 9
      },
      {
        id: "yh02",
        name: "Nguyen Cong Tru",
        age: "18",
        class: "12A2",
        score: 9
      },
      {
        id: "yh03",
        name: "Truong Du Manh",
        age: "18",
        class: "12A2",
        score: 8
      },
      {
        id: "yh04",
        name: "Hoang Quoc Tuan",
        age: "18",
        class: "12A2",
        score: 8
      }
    ],
    selected: [],
    dataAdd: {
      isVisible: false,
      data: {
        id: "",
        name: "",
        age: "",
        class: "",
        score: ""
      }
    }
  };

  onEdit = (data, index) => {
    let { datas } = this.state;
    datas[index] = data;
    this.setState({ datas });
  };

  selected = (i, action) => {
    let { selected } = this.state;
    action ? selected.push(i) : selected.splice(selected.indexOf(i), 1);
    selected.sort((a, b) => b - a);
    this.setState({ selected });
  };

  onDelete = () => {
    const { datas } = this.state;
    for (let i = 0; i < this.state.selected.length; i++) {
      const e = this.state.selected[i];
      datas.splice(e, 1);
    }
    this.setState({ datas });
    this.setState({ selected: [] });
  };

  showAddInput = () => {
    console.log("ready to add");
    let { dataAdd } = this.state;
    dataAdd.isVisible = !dataAdd.isVisible;
    this.setState({ dataAdd });
  };

  handleChangeNewInput = e => {
    const data = this.state.dataAdd.data;
    data[e.target.name] = e.target.value;
    this.setState({ dataAdd: { ...this.state.dataAdd, data: data } });
  };

  addUser = () => {
    let newUser = this.state.dataAdd.data;
    let { datas } = this.state;
    const value = Object.values(newUser);
    console.log(value);
    for (const e of value) {
      if (e === "") {
        return;
      }
    }

    for (let i = 0; i < datas.length; i++) {
      const e = datas[i];
      if (newUser.id === e.id) {
        alert('ID "' + newUser.id + '" đã có');
        return;
      }
      if (newUser.name === e.name) {
        alert('Tên "' + newUser.name + '"đã có');
        return;
      }
    }

    this.showAddInput();
    datas.push(newUser);
    this.setState(datas);
    newUser = { id: "", name: "", age: "", class: "", score: "" };
    this.setState({ dataAdd: { ...this.state.dataAdd, data: newUser } });
  };

  render() {
    const keys = Object.keys(this.state.dataAdd.data);
    return (
      <div>
        <header>
          <h3 className="tittle">BẢNG THÔNG TIN KHÁCH HÀNG</h3>
          <div className="btn-control">
            <button
              className="btn btn-primary"
              onClick={() => {
                console.log("data", this.state.datas);
                console.log("seleted ", this.state.selected);
                console.log("New ", this.state.dataAdd.data);
                console.log("Add visible ", this.state.dataAdd.isVisible);
              }}
            >
              Log data
            </button>
            &nbsp; &nbsp;
            <button className="btn btn-success" onClick={this.showAddInput}>
              Add data
            </button>
            &nbsp; &nbsp;
            <button className="btn btn-danger" onClick={this.onDelete}>
              Delete
            </button>
          </div>
          &nbsp;
        </header>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Student ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Class</th>
              <th>Score</th>
              <th>---</th>
            </tr>
          </thead>
          <tbody>
            {this.state.dataAdd.isVisible && (
              <tr className="bg-success text-white">
                <td>
                  <b>New!</b>
                </td>
                {keys.map((key, index) => (
                  <td key={key}>
                    <Input
                      value={this.state.dataAdd.data[key]}
                      name={key}
                      onChange={this.handleChangeNewInput}
                    />
                  </td>
                ))}
                <td className="tr--edit">
                  <button
                    className="btn btn-success text-white"
                    onClick={this.addUser}
                  >
                    DONE
                  </button>
                </td>
              </tr>
            )}
            {this.state.datas.map((data, index) => (
              <Tr
                data={data}
                key={data.id}
                onEdit={this.onEdit}
                index={index}
                selected={this.selected}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default AppContainer;

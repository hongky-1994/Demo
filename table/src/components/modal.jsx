import React, { Component } from "react";
import Btn from "./btn";

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: { name: "", age: "", sex: "" }
    };
  }

  componentDidMount = () => {
    // const { data } = this.state;
    const modalData = this.props.modal.modalData;
    console.log(this.props);
    
    this.setState({
      data: modalData
    });
  };

  // componentWillReceiveProps = nextProps => {
  //   const { data } = this.state;
  //   this.setState({
  //     data: {
  //       ...data,
  //       name: nextProps.modal.modalData.name
  //     }
  //   });
  //   console.log(this.state.data);
    
  // };

  getData = index => {
    if (index === null) {
      this.setState({ data: this.props.modalData });
    } else {
      this.setState({ data: this.props.data[index] });
    }
  };

  onSubmit = () => {
    let data = this.state.data;
    console.log(data);

    if (data.name.length && data.age.length < 3 && data.sex) {
      this.props.onAdd(data.name, data.age, data.sex);
      this.getData(null);

      this.props.onCancel();
      console.log(this.state.data);
    } else {
      return;
    }
  };

  onEdit = () => {
    let data = this.state.data;
    console.log(data);

    if (data.name.length && data.age.length < 3 && data.sex) {
      this.getData(null);

      this.props.onCancel();
      console.log(this.state.data);
    } else {
      return;
    }
  }

  render() {

    return (
      <div className="modal">
        <div className="modal-container">
          <h3>{this.props.tittle}</h3>
          <input
            type="text"
            name="name"
            placeholder="Họ và tên"
            // value={this.state.data.name}
            onChange={e => {
              let data = this.state.data;
              data.name = e.target.value;
              this.setState({ data });
              console.log(this.state.data);
            }}
          />
          <input
            type="text"
            name="age"
            placeholder="Tuổi"
            // value={this.state.data.age}
            onChange={e => {
              let data = this.state.data;
              data.age = e.target.value.replace(/\D/g, "");

              this.setState({ data });
              console.log(this.state.data);
            }}
          />
          <input
            type="text"
            name="sex"
            placeholder="Giới tính"
            // value={this.state.data.sex}
            onChange={e => {
              let data = this.state.data;
              data.sex = e.target.value;
              this.setState({ data });
              console.log(this.state.data);
            }}
          />
          <div>
            {(this.props.modal.isAdd) ? 
            <Btn class={"btn btn-edit"} innerText={"Add"} onClick={this.onSubmit} />:
            <Btn class={"btn btn-edit"} innerText={"Change"} onClick={this.onEdit} />
            }
            <Btn
              class={"btn btn-danger"}
              innerText={"Cancel"}
              onClick={this.props.onCancel}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;

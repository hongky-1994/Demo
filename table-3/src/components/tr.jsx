import React, { Component } from "react";
import Td from "./td";

class Tr extends Component {
  state = {
    isChecked: false,
    classColor: "",
    isEdit: false,
    data: this.props.data,
    buttonTittle:'Edit'
  };

  onChecked = () => {
    let isChecked = !this.state.isChecked;
    let classColor = isChecked ? "bg-secondary text-white" : "";
    this.setState({ isChecked: isChecked, classColor: classColor });
    isChecked
      ? this.props.selected(this.props.index, true)
      : this.props.selected(this.props.index, false);
  };

  handleEdit = () => {
    const { data } = this.state;
    this.setState({ isEdit: !this.state.isEdit });
    this.state.isEdit && this.props.onEdit(data, this.props.index);
    !this.state.isEdit? this.setState({buttonTittle:'Done'}):this.setState({buttonTittle:'Edit'});
  };

  getValue = (index, key, value) => {
    let { data } = this.state;
    data[key] = value;
    this.setState({ data });
  };

  render() {
    const data = this.props.data;
    const keys = Object.keys(data);
    return (
      <tr className={this.state.classColor}>
        <th>
          <input
            type="checkbox"
            checked={this.state.isChecked}
            onChange={this.onChecked}
          ></input>
        </th>

        {keys.map(key => (
          <Td
            key={key}
            keyno={key}
            index={this.props.index}
            data={data[key]}
            isEdit={this.state.isEdit}
            getValue={this.getValue}
          />
        ))}

        <td className="tr--edit">
        <button className='btn btn-light' onClick={this.handleEdit}>{this.state.buttonTittle}</button>
        </td>
      </tr>
    );
  }
}

export default Tr;

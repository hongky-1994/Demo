import React, { Component } from "react";
import Tr from "./tr";

class Tbody extends Component {
  render() {
    return (
      <tbody className="table__body">
        {this.props.data.map((data, index) => (
          <Tr
            key={index}
            index={index + 1}
            name={data.name}
            age={data.age}
            sex={data.sex}
            onDelete={this.props.onDelete}
            onModal={() => this.props.onModal(index)}
          />
        ))}
      </tbody>
    );
  }
}

export default Tbody;

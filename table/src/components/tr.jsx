import React, { Component } from "react";
import Td from "./td";
import Btn from "./btn";

class Tr extends Component {
  render() {
    const data = this.props;

    return (
      <tr className="table__row">
        <Td value={data.index} />
        <Td value={data.name} />
        <Td value={data.age} />
        <Td value={data.sex} />
        <Td
          value={
            <div>
              <Btn
                class={"btn btn-edit"}
                innerText={<i className="material-icons">build</i>}
                onClick={this.props.onModal}
              />
              <Btn
                class={"btn btn-danger"}
                innerText={<i className="material-icons">delete</i>}
                onClick={() => {
                  // console.log(data.index);
                  this.props.onDelete(data.index - 1);
                }}
              />
            </div>
          }
        />
      </tr>
    );
  }
}

export default Tr;

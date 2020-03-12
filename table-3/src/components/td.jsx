import React, { Component } from "react";

class Td extends Component {
  state = {
    data: this.props.data
  };
  onChange = e => {
    this.props.keyno === "score"
      ? this.setState({ data: e.target.value.replace(/\D+/g, "") })
      : this.setState({ data: e.target.value });
    this.props.getValue(this.props.index, this.props.keyno, e.target.value);
  };

  render() {
    return (
      <React.Fragment>
        {this.props.isEdit ? (
          <td>
            <input
              className="form-control"
              type="text"
              value={this.state.data}
              onChange={this.onChange}
            />
          </td>
        ) : (
          <td>{this.state.data}</td>
        )}
      </React.Fragment>
    );
  }
}

export default Td;

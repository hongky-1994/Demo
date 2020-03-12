import React, { Component, useLayoutEffect } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps ", prevProps);
    console.log("prevState ", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call and get new data from the server
    }
  }
  handleIncrement = product => {
    this.setState({ value: this.state.value + 1 });
  };

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    let { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }

  render() {
    console.log("Counter - Rendered");

    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => {
            this.props.onIncrement(this.props.counter);
          }}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sn m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  
}

export defaut { Counter };

import React, { Component } from "react";
import { Counter, Counter2 } from "./counter";
class Counters extends Component {
  render() {
    const { onAdd, onReset, counters, onDelete, onIncrement } = this.props;
    console.log("Counters - Rendered");

    return (
      <div>
        <button
          onClick={onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        <button onClick={onAdd} className="btn btn-primary btn-sm m-2">
          Add
        </button>
        {counters.map((counter, index) => (
          <Counter
            key={index}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;

import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

import "./App.css";

class App extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 4
      },
      {
        id: 2,
        value: 3
      },
      {
        id: 3,
        value: 2
      },
      {
        id: 4,
        value: 4
      }
    ]
  };

  constructor() {
    super();
    console.log("App - Constructor");
  }

  componentDidMount() {
    console.log("App - Mounted");
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {
      ...counter
    };
    counters[index].value++;
    this.setState({
      counters
    });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({
      counters
    });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({
      counters: counters
    });
  };

  handleAdd = () => {
    let id = this.state.counters.map(c => c.id);
    let newid = Math.max.apply(Math, id) + 1;
    const counters = this.state.counters;
    counters.push({ id: newid, value: 0 });
    this.setState({counters})
  };
  render() {
    console.log("App - Render");

    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onAdd={this.handleAdd}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;

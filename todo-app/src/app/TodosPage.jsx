import React, { Component } from "react";
import Todo from "./Todo";
import { connect } from "react-redux";
import { addTodo } from "../store/actions";

class TodosPage extends Component {
  state = {
    title: ""
  };
  render() {
    return (
      <div className="App">
        <h1>TODO APPLICATIONS</h1>
        <hr />
        <form
          className="input-group mb-3"
          onSubmit={e => {
            this.props.addTodo(this.state.title);
            this.setState({ title: "" });
            e.preventDefault();
          }}
        >
          <input
            type="text"
            className="form-control"
            placeholder="Enter your tasks here"
            onChange={e => {
              this.setState({ title: e.target.value });
            }}
            value={this.state.title}
          />
          <div className="input-group-append">
            <button className="btn btn-info">ADD</button>
          </div>
        </form>

        <hr />
        <h2>Your tasks:</h2>
        {this.props.todos.map((todo, index) => (
          <Todo key={todo.id + todo.title} todo={todo} index={index} />
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => ({ todos: state.todos });
const mapDispatchToProps = { addTodo };
export default connect(mapStateToProps, mapDispatchToProps)(TodosPage);

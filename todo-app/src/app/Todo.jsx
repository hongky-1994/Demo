import React, { Component } from "react";
import { todoCompleted } from "../store/actions";
import { connect } from "react-redux";

class Todo extends Component {
  render() {
    return (
      <div className="d-flex align-items-center p-3">
        <input
          className="mr-3"
          type="checkbox"
          name={"task" + this.props.todo.id}
          id={"task" + this.props.todo.id}
          onChange={() => this.props.todoCompleted(this.props.todo.index)}
          value={this.props.todo.completed}
        />
        <label className="label" htmlFor={"task" + this.props.todo.id}>
          {this.props.todos[this.props.index].title}
        </label>
      </div>
    );
  }
}
const mapStateToProps = state => ({ todos: state.todos });
const mapDispatchToProps = { todoCompleted };
export default connect(mapStateToProps, mapDispatchToProps)(Todo);

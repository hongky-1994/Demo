import React, { Component } from "react";
import { todoChangeStatus } from "../../store/actions";
import { connect } from "react-redux";

class Todo extends Component {
  render() {
    return (
      <div
        className={
          this.props.todos[this.props.index].completed ? "completed" : ""
        }
        onClick={() => {
          const { todos, todoChangeStatus } = this.props;
          let newTodos = todos;
          newTodos[this.props.index].completed = !todos[this.props.index]
            .completed;

          todoChangeStatus(newTodos);
        }}
      >
        <h2>
          <b>Title:</b> {this.props.todo.title}
        </h2>
        <div className="todo-subtitle">
          <p>ID: {this.props.todo.id}</p>
          <p>Belong to userID: {this.props.todo.userId}</p>
          <p>Status: {this.props.todo.completed ? "Yes" : "No"}</p>
        </div>
        <hr />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = { todoChangeStatus };
export default connect(mapStateToProps, mapDispatchToProps)(Todo);

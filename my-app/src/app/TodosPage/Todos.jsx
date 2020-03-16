import React, { Component } from "react";
import { fetchData } from "../../store/fetchData";
import { connect } from "react-redux";
import Todo from "./Todo";

class Todos extends Component {
  render() {
    return (
      <div>
        <button
          className="btn btn-info"
          onClick={() =>
            this.props.fetchData(
              "todos",
              "https://jsonplaceholder.typicode.com/todos"
            )
          }
        >
          Load Todo List
        </button>

        <div className="todosList">
          {this.props.todos.map((todo, index) => (
            <Todo key={todo.id} todo={todo} index={index} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ todos: state.todos });

const mapDispatchToProps = { fetchData };
export default connect(mapStateToProps, mapDispatchToProps)(Todos);

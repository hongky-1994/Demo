import React, { Component } from "react";
import { Prompt } from "react-router-dom";

class Form extends Component {
  state = {
    isBlocking: false
  };
  render() {
    return (
      <form
        className="form-group"
        onSubmit={event => {
          event.preventDefault();
          event.target.reset();
        }}
      >
        <Prompt
          when={this.state.isBlocking}
          message={location => `Do you want to access ${location.pathname}`}
        />
        <label className="form-group" htmlFor="message">
          Message
        </label>
        <textarea
          className="form-group form-control"
          type="text"
          name="message"
          onChange={e => {
            this.setState({ isBlocking: e.target.value.length > 0 });
          }}
        />
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    );
  }
}
export default Form;

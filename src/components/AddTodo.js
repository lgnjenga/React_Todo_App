import React, { Component } from "react";
import PropTypes from "prop-types";

class AddTodo extends Component {
  // Component-level state
  state = {
    title: "",
  };

  // input:text onChange event to capture value as you type
  onType = (e) => this.setState({ [e.target.name]: e.target.value });

  // form onSubmit event to send props upwards to App.js
  onSend = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form style={{ display: "flex" }} onSubmit={this.onSend}>
        <input
          type="text"
          name="title"
          placeholder="Add Todo...."
          value={this.state.title}
          onChange={this.onType}
          style={{ flex: "10", padding: "5px" }}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}

// PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddTodo;

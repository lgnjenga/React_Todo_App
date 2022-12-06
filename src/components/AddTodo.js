import React, { Component } from "react";

export default class AddTodo extends Component {
  // Component-level state
  state = {
    title: "",
  };

  onSend = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  onType = (e) => this.setState({ [e.target.name]: e.target.value });

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

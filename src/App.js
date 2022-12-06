import React, { Component } from "react";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import "./App.css";
import Todos from "./components/Todos";

class App extends Component {
  // State
  state = {
    todos: [
      {
        id: 1,
        title: "Clean room",
        completed: false,
      },
      {
        id: 2,
        title: "Wash dishes",
        completed: false,
      },
      {
        id: 3,
        title: "Cook food",
        completed: false,
      },
    ],
  };

  // Toggle complete method
  markComplete = (id) => {
    // console.log(id);
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  // Delete Todo
  deleteTodo = (id) => {
    // console.log(id);
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  // Add Todo
  addTodo = (title) => {
    // console.log(title);
    const newTodo = {
      id: 4,
      title,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  render() {
    // console.log(this.state.todos);
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            deleteTodo={this.deleteTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;

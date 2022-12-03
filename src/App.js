import React, { Component } from "react";
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
        completed: true,
      },
      {
        id: 3,
        title: "Cook food",
        completed: true,
      },
    ],
  };

  render() {
    // console.log(this.state.todos);
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;

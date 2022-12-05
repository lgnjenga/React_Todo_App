import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    // if (this.props.todo.completed) {
    //   return {
    //     textDecoration: "line-through",
    //   };
    // } else {
    //   return {
    //     textDecoration: "none",
    //   };
    // }

    return {
      borderRadius: "25px",
      background: "linear-gradient(145deg, #cacaca, #f0f0f0)",
      boxShadow: "20px 20px 60px #bebebe, -20px -20px 60px #ffffff",
      // background: "#f4f4f4",
      padding: "10px",
      margin: "10px",
      // borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  // markComplete = (e) => {
  //   console.log(this.props);
  // };

  render() {
    // Destructure to extract props being passed down
    const { id, title } = this.props.todo;

    return (
      // <div style={{ backgroundColor: '#f4f4f4' }}>
      // <div style={itemStyle}>
      <div style={this.getStyle()}>
        <p>
          {/* <input type="checkbox" onChange={this.markComplete} /> */}
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <button
            onClick={this.props.deleteTodo.bind(this, id)}
            style={btnStyle}
          >
            x
          </button>
        </p>
      </div>
    );
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

// const itemStyle = {
//   backgroundColor: "#f4f4f4",
// };

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};

export default TodoItem;
